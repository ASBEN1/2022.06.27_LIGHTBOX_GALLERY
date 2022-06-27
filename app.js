// app.js

/*
1. 이미지 썸네일 클릭 
  -> lightbox 에 해당 이미지 url 변경 attribute (제이쿼리=attr)
  -> 팝업 display

2. 닫기 버튼 클릭
  -> popup창 닫기
*/

const img = document.querySelectorAll('#gallery li');
// 각각의 썸네일 이미지 요소에 이벤트 등록
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function () {
    // 이미지 탐색 후 url값 가져오기
    let imgurl = img[i].children[0].src; // 숫자 0은 배열의 의미(순서), src=.getAttribute('src')
    console.log(imgurl);
    /*console.log(img[i].children[0].src);*/

    // LIGHTBOX 표시
    const lightbox = document.getElementById('lightbox');
    /*lightbox.setAttribute('class', 'on');*/
    lightbox.classList.add('on')

    // 클릭한 이미지 표시
    const lightboxImg = document.querySelector('#lightbox .box img');
    lightboxImg.setAttribute('src', imgurl);
  });
};

/* 팝업창 닫기 
  닫기 버튼을 누르면 닫힘
*/

const clbt = document.getElementById('closeBtn');
clbt.addEventListener('click', function () {
  const lightbox = document.querySelector('#lightbox'); // <- 지역 변수
  lightbox.classList.remove('on') // remove = off
});

  // 버튼 누르면 닫기