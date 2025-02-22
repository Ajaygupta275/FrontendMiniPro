const userInput=document.querySelector('.user-Input');
const form=document.querySelector('form')
let randomNumber=Math.round(Math.random()*100);
const results=document.querySelector('.result');
const allGues=document.querySelector('.all-guesses');
const submitBtn=document.querySelector('.submit-btn');
const startGames=document.querySelector('.start-game');

const allGessArr=[];

form.addEventListener('submit',(e)=>{
     e.preventDefault();
    const userInputValue=parseInt(userInput.value);
    if(userInputValue<randomNumber){
       results.innerText='To Low'
    }else if(userInputValue>randomNumber){
        results.innerText='To Heigh'
    }else {
        results.innerText='Congrates Good Job'
        startGames.disabled=false
        submitBtn.disabled=true


    }
    form.reset();

    allGessArr.push(userInputValue);
    allGues.innerText='Guess Number ' +allGessArr.join(',');
})

startGames.addEventListener('click',()=>{
    results.innerText=''
    allGues.innerText=''
    startGames.disabled=true
    submitBtn.disabled=false
    randomNumber=Math.round(Math.random()*100);
})