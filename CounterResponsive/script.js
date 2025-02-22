let valueDisplays=document.querySelector(".num");
let interval=5000;


valueDisplays.forEach((valueDisplay)=>{
  let startValues=0;
  let endValue=parseInt(valueDisplay.getAttribute("data-val"));
  let duration=Math.floor(interval/endValue);
  let counter=setInterval(function(){
    startValues +=1;
    valueDisplay.textContent=startValues;
   if(startValues==endValue){
    clearInterval(counter);
   }  

});
    

})