//백그라운드 배경이므로 body에 접근 할 수 있는 객체를 생성한다
const body = document.querySelector("body");

//현재 사진이 세장이므로
const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  //랜덤함수가 0을 반환할 수도 있기 때문에 1을 더한다
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImg");
  body.appendChild(image);
}

//랜덤 숫자를 생성. .floor를 통해 소수 부분을 버린다
function genRandom() {
  const number = Math.floor(Math.random() * 3);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
