
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