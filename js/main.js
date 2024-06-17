
function sayHello() {
  alert('main페이지 입니다');
}


// 화살표함수 - 콘솔에 나옴
const arrow = () => {
  console.log('안녕하세요');
};
arrow();

const add = (a, b) => a + b;    // 2

console.log(add(2, 3)); 


// 익명함수
const myFunction = function() {
  console.log('익명함수');
};
myFunction();

// 이벤트 - 버튼 누르면 콘솔에 뜸
document.addEventListener('DOMContentLoaded', function() {    
  const button = document.getElementById('myButton');

  button.addEventListener('click', function() {
      console.log('Button 클릭');
  });
});