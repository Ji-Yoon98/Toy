// 캔버스 세팅
let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
let butImg = document.querySelector('.but > img');
let but = document.querySelector('.but');
let isPlaying = false;

// 캔버스 사이즈
canvas.width = 900;
canvas.height = 650;
document.body.appendChild(canvas);

let backgroundImage,
    spaceshipImage,
    bulletImage,
    enemyImage,
    fireImage,
    gameOverImage;
let start = false;
let gameOver = false; // true면 게임 끝, false면 게임 계속
let score = 0;

// 우주선 좌표
let spaceshipX = canvas.width / 2 - 32;
let spaceshipY = canvas.height - 70;

let bulletList = []; // 총알들을 저장하는 list

function Bullet() {
    this.x = 0;
    this.y = 0;
    this.init = () => {
        this.x = spaceshipX + 7;
        this.y = spaceshipY - 20;
        this.alive = true; //true면 살아있는 총알, false면 죽은 총알

        bulletList.push(this);
    };
    this.update = function () {
        this.y -= 10 ;
    };

    this.checkHit = () => {
        for (let i = 0; i < enemyList.length; i++) {
            /* 총알.y <= 적군.y and 총알.x >= 적군.x and 총알.x <= 적군.x+너비*/
            if (this.y <= enemyList[i].y && this.x >= enemyList[i].x && this.x <= enemyList[i].x + 48) {
                score++;
                this.alive = false; //죽은 총알
                this.fire = true;
                enemyList.splice(i, 1); 
            }
        }
    };
}

function generateRandomValue(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; 
    return randomNum;
}

let enemyList = [];
function Enemy() {
    this.x = 0;
    this.y = 0;
    this.init = () => {
        this.y = 0;
        this.x = generateRandomValue(0, canvas.width - 50); // 최대, 최소 받음

        enemyList.push(this);
    };
    this.update = function () {
        this.y += 1; // 적군의 속도 조절

        if (this.y >= canvas.height - 100) {
            gameOver = true;
        } 
    };
}

function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src = "images/background.gif";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/space.png";

    bulletImage = new Image();
    bulletImage.src = "images/bullet.png";

    enemyImage = new Image();
    enemyImage.src = "images/enemy.png";

    fireImage = new Image();
    fireImage.src = "images/fire.png";

    gameOverImage = new Image();
    gameOverImage.src = "images/gameover.png";
}

let keysDown = {};
function setupKeyboardListener() {
    document.addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    });
    document.addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];

        if (e.keyCode == 32) {
            createBullet(); // 총알 생성하는 함수
        }
    });
}

function createBullet() {
    console.log("총알 생성!");
    let b = new Bullet();
    b.init(); 
}

function createEnemy() {
    const interval = setInterval(function () {
        let e = new Enemy();
        e.init();
    }, 1000); 
}

function update() {
    if (39 in keysDown) {
        spaceshipX += 5;
    } // right
    if (37 in keysDown) {
        spaceshipX -= 5;
    } // left

    // 우주선의 좌표값이 틀 안에서만 있게 하려면
    if (spaceshipX <= 0) {
        spaceshipX = 0;
    }
    if (spaceshipX >= canvas.width - 64) {
        spaceshipX = canvas.width - 64;
    }

    // 총알의 y좌표 업데이트 하는 함수
    for (let i = 0; i < bulletList.length; i++) {
        if (bulletList[i].alive) {
            bulletList[i].update();
            bulletList[i].checkHit();
        }
    }

    // enemy 업데이트 하는 함수
    for (let i = 0; i < enemyList.length; i++) {
        enemyList[i].update();
    }
}

function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
    ctx.fillText(`Score:${score}`, 20, 30); // 
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    for (let i = 0; i < bulletList.length; i++) {
        if (bulletList[i].alive) {
            ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
        }
        if (bulletList[i].fire) {
            ctx.drawImage(fireImage, bulletList[i].x-10, bulletList[i].y);
            setTimeout(function () {
                bulletList[i].fire = false;
            }, 100);
        }
    }

    for (let i = 0; i < enemyList.length; i++) {
        ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
    }
}

function main() {
        if (!gameOver) {
            but.style.display = 'none';
            render();
            update(); // 좌표값을 업데이트하고
            requestAnimationFrame(main); // frame 여러번 계속 호출함.(자기자신계속호출시켜서 이미지가 render되도록함.)
        } else {
            ctx.drawImage(gameOverImage, 220, 100, 400, 380);
            
        }
}
function run(){
    loadImage();
    setupKeyboardListener();
    createEnemy();
    main();
}


