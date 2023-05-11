# ☕ Starbucks_Project

### HTML, CSS, JavaScript로 만드는 스타벅스 랜딩 페이지

# ☕ 사용기술 & 개발환경

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><br>
<img src="https://img.shields.io/badge/Visual Studio Code-0769AD?style=for-the-badge&logo=Visual Studio Code IDEA&logoColor=white">

# ☕ 화면구성 및 기능

## React.css

브라우저가 가진 기본적인 css 스타일을 초기화하는 방법.
각 브라우저의 기본 스타일을 초기화

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## Google Material Icons

[구글에서 제공하는 머터리얼 아이콘](https://material.io/resources/icons/?style=baseline)을 무료로 사용

[Getting started for web](https://material.io/develop/web/getting-started)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

**사용방법**👇🏻

```html
<div class="material-icons">upload</div>
```

## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)\
→ 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
```

```javascript
gsap.to(요소, 시간, 옵션)
// 또는
TweenMax.to(요소, 시간, 옵션)
```

[ScrollToPlugin](https://greensock.com/scrolltoplugin/)\
→ 스크롤 애니메이션을 지원하는 GSAP 플러그인

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

```javascript
gsap.to(window, .7, {
  scrollTo: 0
});
```

[.to() 사용법](https://greensock.com/docs/v3/GSAP/gsap.to())

[GSAP Easing](https://greensock.com/docs/v2/Easing)

## Swiper

[Swiper](https://swiperjs.com/)\
→ 슬라이드 라이브러리

[Getting Started With Swiper](https://swiperjs.com/get-started)

**6버전 이용**👇🏻

```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```

- 6버전 이상부터는 swiper-container가 swiper로 변경됨.

[Swiper API](https://swiperjs.com/swiper-api) (옵션 확인)

```js
new Swiper(요소, 옵션);
```

```js
new Swiper('.swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
```

## Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

[플레이어 매개변수(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters) (옵션 확인)

```js
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    videoId: '재생할 유튜브 영상 ID', 
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true,       // 반복 재생 유무
      playlist: '반복 재생할 유튜브 영상 ID 목록' 
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}
```

## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)\
→ 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리

대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용

[ScrollMagic API](http://scrollmagic.io/docs/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

```js
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
```

## Lodash

[Lodash](https://lodash.com/)\
→ 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리

[Lodash API](https://lodash.com/docs/4.17.15)\
[Lodash throttle](https://lodash.com/docs/4.17.15#throttle)
