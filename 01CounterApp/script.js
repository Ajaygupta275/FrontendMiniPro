const minusBtn=document.querySelector('.minus-btn');
const plusBtn=document.querySelector('.plus-btn');
const count=document.querySelector('.count');
const changingby=document.querySelector('.changeBy');
const restButton=document.querySelector('rest')
minusBtn.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText);
    const changeByValue=parseInt(changingby.value);

    count.innerText=countValue-changeByValue;
});

plusBtn.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText);
    const changeByValue=parseInt(changingby.value);
    count.innerText=countValue+changeByValue;
});

restButton.addEventListener('click',()=>{
    count.innerText=0;
})



