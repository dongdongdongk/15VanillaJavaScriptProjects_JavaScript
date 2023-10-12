const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
// console.log(list);
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

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li"); // 모든 li 요소를 선택 이를 liEls 변수에 할당
    let list = [] // 변수를 빈 배열로 초기화 이 배열은 로컬 스토리지에 저장할 데이터를 담는 데 사용
    liEls.forEach(liEl =>{
        list.push({
            name : liEl.innerText,
            checked : liEl.classList.contains("checked") // class 중에 checked 가 있는지 확인 있으면 true checked 에 저장 
        })
    })
    localStorage.setItem("list",JSON.stringify(list)) // 로컬 스토리지에 "list"라는 키로 데이터를 저장
    // list 배열에 저장된 정보를 JSON 형식으로 문자열로 변환(JSON.stringify(list))한 후, 이 문자열을 "list" 키와 함께 로컬 스토리지에 저장
    // 로컬 스토리지는 텍스트 데이터만을 저장할 수 있다
}