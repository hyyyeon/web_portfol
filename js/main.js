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
  // 현재 날짜
  const currentDate = new Date();
  const formattedCurrentDate = formatDate(currentDate);
  // 특정 날짜 
  const specificDate = new Date(2024, 7, 7);
  const formattedSpecificDate = formatDate(specificDate);
  // 출력
  document.getElementById('currentDate').textContent = "오늘 날짜: " + formattedCurrentDate;
  document.getElementById('specificDate').textContent = "해커톤 날짜 : " + formattedSpecificDate;
}
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); //월은 0부터 시작
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