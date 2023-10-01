const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//랜덤한 컬러 생성해서 hexColor 에 대입 
btn.addEventListener('click', function(){
let hexColor = '#';
//총 6자리 램덤한 값을 구해 색을 정해야함
for(let i = 0; i<6;i++){
    hexColor += hex[getRandomNumber()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

//랜덤한 hex 컬러 숫자 하나 생성(위의 hex 에서 랜덤한 )
//Math.random() * hex.length ex) 0.349782 * 16 = 5.596512
//Math.floor 내림으로  
function getRandomNumber() { 
    return Math.floor(Math.random() * hex.length);
}