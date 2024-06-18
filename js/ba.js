
// @@@@@@@@ 베열 메소드 @@@@@@ 
window.onload = function() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // filter 사용, 짝수만 가져옴
    const evenNumbers = numbers.filter(function(number) {
      return number % 2 === 0;
    });
  // map을 사용해 짝수를 두 배로 만듦
    const doubledNumbers = evenNumbers.map(function(number) {
      return number * 2;
    });
  // forEach를 사용. 숫자를 출력
    doubledNumbers.forEach(function(number) {
      console.log(number);
    });

    const resultsDiv = document.getElementById('results');
    if (resultsDiv) {
    resultsDiv.innerHTML = `<p>원래 숫자: ${numbers.join(', ')}</p>`;
    resultsDiv.innerHTML += `<p>짝수: ${evenNumbers.join(', ')}</p>`;
    resultsDiv.innerHTML += `<p>두 배가 된 숫자: ${doubledNumbers.join(', ')}</p>`;
    } else {
      console.error("Element with id 'result' not found.");
    }
  };