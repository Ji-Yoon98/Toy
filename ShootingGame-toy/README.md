# 🚀 ShootingGame-toy

### JavaScript로 만드는 슈팅 게임

# 🚀 사용기술 & 개발환경

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><br>
<img src="https://img.shields.io/badge/Visual Studio Code-0769AD?style=for-the-badge&logo=Visual Studio Code IDEA&logoColor=white">

# 🚀 화면구성 및 기능

<https://user-images.githubusercontent.com/97427387/218166402-7bbd0de6-0ada-43ab-aa9a-47a4c6becc62.mp4>

- Game Start Click
- 우주선을 좌우로 조작하여 총알을 쏴서 떨어지는 적군을 물리침 죽으면서 타오름
- 적군을 죽이면 스코어가 1점씩 올라감
- 적군이 바닥쯤에 닿게되면 게임종료

---

### 👇🏻 내 맘대로 기능 추가

<details>
<summary>게임시작 버튼 만들기</summary><br>

```javascript
function run() {
    loadImage();
    setupKeyboardListener();
    createEnemy();
    main();
};
```

</details>

### 🚀 하고싶은 말

> 게임시작 버튼을 만든다음 게임 중엔 비활성화로 막고
> 게임이 종료되면 다시 버튼을 활성화 하여, 게임을 다시 시작하게 하고 싶었으나, 활성화 된 버튼을 눌러도 재시작이 안된다.
> canvas를 처음 써보다 보니 모르는게 많고, 열심히 검색도 해봤지만 왜 재시작이 안돼는지는 모름..
> 나중에 다시 매달려보자!
