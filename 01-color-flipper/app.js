const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//랜덤한 수를 얻기 
function getRandomNumber() { 
  //Math.floor 내림으로 정수 얻기 
  //Math.random 은 0~1 까지의 랜덤 숫자 x colors 배열의 길이
  return Math.floor(Math.random() * colors.length);
}