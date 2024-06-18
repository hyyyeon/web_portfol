function sayHello() {
  alert('main페이지 입니다');
}

// @@@ 화살표함수 - 콘솔에 나옴
const arrow = () => {
  console.log('안녕하세요');
};
arrow();

const add = (a, b) => a + b;    // 2
console.log(add(2, 3)); 


// @@@ 익명함수
const myFunction = function() {
  console.log('익명함수');
};
myFunction();

// @@@ 이벤트 - 버튼 누르면 콘솔에 뜸
document.addEventListener('DOMContentLoaded', function() {    
  const button = document.getElementById('myButton');

  button.addEventListener('click', function() {
      console.log('Button 클릭');
  });
});


// @@@@ 날짜 객체 @@@@@@@@@
document.addEventListener('DOMContentLoaded', (event) => {
  displayDates();
});
function displayDates() {
  // 현재 날짜 객체 생성
  const currentDate = new Date();
  const formattedCurrentDate = formatDate(currentDate);
  // 특정 날짜 객체 생성 (2024년 8월 7일)
  const specificDate = new Date(2024, 7, 7); // 월(month)는 0부터 시작하므로 7은 8월을 나타냄
  const formattedSpecificDate = formatDate(specificDate);
  // HTML 엘리먼트에 날짜 출력
  document.getElementById('currentDate').textContent = "현재 날짜: " + formattedCurrentDate;
  document.getElementById('specificDate').textContent = "해커톤 날짜 : " + formattedSpecificDate;
}
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 토글
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarMenu = document.querySelector('.navbar_menu');

  menuToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
  });
});