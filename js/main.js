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


// @@@@ DOM 요소@@@@

// 새 목록 항목을 추가하는 함수
function addListItem() {
  // 새로운 li 요소를 생성합니다.
  const newItem = document.createElement('li');
  newItem.textContent = '새 항목';
  // li 요소에 삭제 버튼을 추가합니다.
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.onclick = function() {
      // 삭제 버튼이 클릭되면 li 요소를 삭제합니다.
      newItem.remove();
  };
  newItem.appendChild(deleteButton);
  // ul 요소에 새로운 li 요소를 추가합니다.
  const list = document.getElementById('itemList');
  list.appendChild(newItem);
}
// 페이지가 로드될 때 실행할 초기 설정
window.onload = function() {
  // '항목 추가' 버튼에 클릭 이벤트 리스너를 추가합니다.
  const addButton = document.getElementById('addButton');
  addButton.onclick = addListItem;
};




// @@@@@@@@ 베열 메소드 @@@@@@ 
window.onload = function() {
  // 숫자 배열을 정의합니다.
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // filter를 사용하여 짝수만 가져옵니다.
    const evenNumbers = numbers.filter(function(number) {
      return number % 2 === 0;
    });
  // map을 사용하여 짝수를 두 배로 만듭니다.
    const doubledNumbers = evenNumbers.map(function(number) {
      return number * 2;
    });
  // forEach를 사용하여 각 두 배로 된 숫자를 콘솔에 출력합니다.
    doubledNumbers.forEach(function(number) {
      console.log(number);
    });
    // 선택 사항: 결과를 웹 페이지에 표시합니다.
    const resultsDiv = document.getElementById('results');
    if (resultsDiv) {
    resultsDiv.innerHTML = `<p>원래 숫자들: ${numbers.join(', ')}</p>`;
    resultsDiv.innerHTML += `<p>짝수들: ${evenNumbers.join(', ')}</p>`;
    resultsDiv.innerHTML += `<p>두 배로 된 숫자들: ${doubledNumbers.join(', ')}</p>`;
    } else {
      console.error("Element with id 'result' not found.");
    }
  };