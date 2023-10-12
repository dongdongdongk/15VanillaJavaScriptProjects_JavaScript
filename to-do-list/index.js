const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
// 이 부분은 로컬 스토리지에서 "list"라는 이름의 데이터를 가져오는 역할을 이것은 이전에 저장한 할 일 목록 데이터를 가져오는 것
//  JSON 형식의 문자열을 JavaScript 객체로 변환 로컬 스토리지에서 가져온 데이터는 문자열 형태이므로, 이를 JavaScript 객체로 변환해야 함
// list에는 이전에 저장한 할 일 목록이 JavaScript 객체 배열의 형태로 저장됨
// console.log(list);

// 저장한 할일 목록이 존재한다면 
if(list) {
    list.forEach(work=>{
        toDoList(work);
    })
}

formEl.addEventListener("submit",(event)=>
{
    event.preventDefault()
    // console.log(inputEl.value);
    toDoList()
});

function toDoList(work) { 
    let newWork = inputEl.value;
    if(work) {
        newWork = work.name;
    }
    const liEl = document.createElement("li");
    if(work && work.checked) {
        liEl.classList.add("checked");
    }
    liEl.innerText = newWork;
    ulEl.appendChild(liEl);
    inputEl.value = "";
    
    const checkBtnEl = document.createElement("div")
    checkBtnEl.innerHTML = `<i class="fa-regular fa-calendar-check">`;
    liEl.appendChild(checkBtnEl);

    const trashBrnEl = document.createElement("div");
    trashBrnEl.innerHTML = `<i class="fa-solid fa-trash">`;
    liEl.appendChild(trashBrnEl);

    checkBtnEl.addEventListener("click",()=>{
        liEl.classList.toggle("checked");
        // classList.toggle("checked") liEl 요소에 checked 가 있으면 추가하고 없으면 삭제 toggle
        updateLocalStorage();
    });

    trashBrnEl.addEventListener("click",()=>{
        liEl.remove();
        updateLocalStorage();
    })
    updateLocalStorage();
}

//로컬 스토리지에 저장 하는기능 
function updateLocalStorage(){
    const liEls = document.querySelectorAll("li"); // 모든 li 요소를 선택 이를 liEls 변수에 할당
    let list = [] // 변수를 빈 배열로 초기화 이 배열은 로컬 스토리지에 저장할 데이터를 담는 데 사용
    liEls.forEach(liEl =>{
        list.push({
            name : liEl.innerText, // name 에 현제 li 의 텍스트를 넣음 
            checked : liEl.classList.contains("checked") // class 중에 checked 가 있는지 확인 있으면 true checked 에 저장 
        })
    })
    localStorage.setItem("list",JSON.stringify(list)) // 로컬 스토리지에 "list"라는 키로 데이터를 저장
    // 웹 페이지를 다시 열거나 새로 고침할 때에도 "list" 키로 저장된 JSON 문자열을 로컬 스토리지에서 검색하여 이전 데이터를 복원할 수 있음
    // JSON.stringify() 함수를 사용하여 데이터를 문자열로 변환하는 이유는 로컬 스토리지에는 문자열 형태로만 데이터를 저장할 수 있기 때문
}