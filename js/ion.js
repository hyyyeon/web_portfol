
// @@@@ DOM 요소@@@@

// 항목 추가 함수
function addListItem() {
  // 새로운 li 요소 생성
  const newItem = document.createElement('li');
  newItem.textContent = '새 항목';
  // 삭제 버튼을 추가
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.onclick = function() {
      // 버튼클릭시 li 요소를 삭제
      newItem.remove();
  };
  newItem.appendChild(deleteButton);
  // ul 요소에 새로운 li 요소를 추가
  const list = document.getElementById('itemList');
  list.appendChild(newItem);
}

// 초기 설정
window.onload = function() {
  // '항목 추가' 버튼에 클릭 이벤트 리스너 추가
  const addButton = document.getElementById('addButton');
  addButton.onclick = addListItem;
};
