# 🤖 TypingGame
### vanilla, API를 이용한 간단한 영어단어 타이핑 게임 만들기

# 🤖 사용기술 & 개발환경
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><br>
<img src="https://img.shields.io/badge/Visual Studio Code-0769AD?style=for-the-badge&logo=Visual Studio Code IDEA&logoColor=white">

# 🤖 화면구성 및 기능
https://user-images.githubusercontent.com/97427387/215437018-eab487a6-ed48-4f60-ae98-723ac25ba986.mp4

- 게임 로딩중이 먼저 뜨고 시간이 지나면 게임시작 버튼이 활성화 됨
- 게임 시작 click -> 5초의 시간이 카운트다운 됨
- input에 단어를 입력시[소문자, 대문자 상관없이] 점수가 오름

---

### 👇🏻 내 맘대로 기능 추가 
<details>
<summary>게임 시작 전 input창 비활성화</summary><br>

```javascript
function init() {
    buttonChange('게임 로딩중···');
    wordInput.disabled  = true;      // 추가
    getWords();
    wordInput.addEventListener('input', checkMatch);
};

function buttonChange(text) {
    but.innerText = text;
    text === '게임시작' ? 
    (but.classList.remove('loading'),wordInput.disabled  = true) : 
    (but.classList.add('loading'), wordInput.disabled  = false);
    
    // 버튼 text가 게임시작이라면 input을 비활성화 시킴
};
```
</details>

<details>
<summary>정답 시 alert을 띄워 재미++</summary><br>
  
```javascript
function checkMatch () {
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        wordInput.value = '';
        if(!isPlaying) { return; }
        score++;
        scoreDisplay.innerText = score;
        time = Game_Time;
        const randomeIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomeIndex];
        // alert 추가
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
```
</details>

<details>
<summary>새 게임시작 후 정답 입력 시 이전게임 점수 반영 오류 해결 && input 초기화</summary><br> 
                
```javascript
function run() {
    if(isPlaying) { return; }
    isPlaying = true;
    time = Game_Time;
    wordInput.value = null;   // 게임실행 시 input 값 초기화
    wordInput.focus();
    score = 0;                // 게임실행 시 점수 초기화
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange('게임 중')
};
```
</details>
