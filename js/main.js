// 사용변수
const Game_Time = 5;
let score = 0;
let time = Game_Time;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time'); 
const but = document.querySelector('.but');
wordInput.disabled  = false;
init();

function init() {
    buttonChange('게임 로딩중···');
    wordInput.disabled  = true;
    getWords();
    wordInput.addEventListener('input', checkMatch);
};

// 게임실행
function run() {
    if(isPlaying) { return; }
    isPlaying = true;
    time = Game_Time;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange('게임 중')
};

function checkStatus() {
    if(!isPlaying && time === 0) {
        buttonChange('게임시작');
        clearInterval(checkInterval);
    }
};

// 단어 불러오기
function getWords(){
    axios.get('https://random-word-api.herokuapp.com/word?number=100')
        .then(function (response) {
            response.data.forEach((word) => {
                if(word.length < 10) {
                    words.push(word);
                }
            });
            buttonChange('게임시작');
        })
        .catch(function (error) {
            console.log(error);
        })
};

// 단어일치 체크
function checkMatch () {
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        wordInput.value = '';
        if(!isPlaying) { return; }
        score++;
        scoreDisplay.innerText = score;
        time = Game_Time;
        const randomeIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomeIndex];
        alert(
            '\n점수 올라간당 얍 \n\n' +
            '˚∧＿∧  　+        —̳͟͞͞💗 \n' + 
            '(  •‿• )つ  —̳͟͞͞ 💗         —̳͟͞͞💗 +\n' +
            '(つ　 <                —̳͟͞͞💗\n' +
            '｜　 _つ      +  —̳͟͞͞💗         —̳͟͞͞💗 ˚\n' +
            '`し´'
        );
    };
};

function countDown(){
    time > 0 ? time-- : isPlaying = false;
    if(!isPlaying) {
        clearInterval(timeInterval);
    }
    timeDisplay.innerText = time;
};

function buttonChange(text) {
    but.innerText = text;
    text === '게임시작' ? (but.classList.remove('loading'),wordInput.disabled  = true): (but.classList.add('loading'), wordInput.disabled  = false);
};