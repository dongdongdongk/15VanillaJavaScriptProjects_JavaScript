//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//forEach 로 위의 btns 에 저장된 class btn 들의 배열 
btns.forEach(function (btn){ // btns 의 각 값을 btn 으로 지정하고 사용 
    btn.addEventListener('click', function(e){ // 각 btn 을 클릭 할 때 클릭한 대상을 e로 지정하고 사용 
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--;         
        }else if(styles.contains('increase')) {
            count++;
        }else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0) {
            value.style.color = "red"
        }
        if(count = 0) {
            value.style.color = "black"
        }
        value.textContent = count;
    });
});