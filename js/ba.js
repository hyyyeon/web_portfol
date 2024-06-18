
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