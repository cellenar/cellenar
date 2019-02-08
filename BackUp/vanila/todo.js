// form, input, ul에 접근 할 수 있게 한다
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

// 삭제 버튼을 만들고 누르면 html페이지에서 삭제됨
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// input에 입력된 값을 표시 해준다
function paintToDo(text) {
  //li, button, span 태그를 생성 할 수 있게 설정 한다
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  //button의 모양을 미리 정의한다
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  // span에 들어가는 값은 input에 제출된 값이다
  span.innerText = text;
  // li에 span, delBtn을 추가한 후, 이미 있던 ul의 하위에 추가한다
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

//제출과 관련된 이벤트,
function handleSubmit(event) {
  event.preventDefault();
  //input의 값에 접근 할 수 있게 함
  const currentValue = toDoInput.value;
  //input의 값 과 관련된 paintToDo함수를 불러오고, input의 값은 아무것도 없게 초기화함
  paintToDo(currentValue);
  toDoInput.value = "";
}

// localstorage에서 할일을 가져와서 무언가를 한다
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(write) {
      paintToDo(write.text);
    });
  }
}

//초기화 함수
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
