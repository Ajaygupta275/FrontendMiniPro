const input=document.querySelector('input');
const lowerCaseOutput=document.querySelector('#lowerCase');
const upperCaseOutput=document.querySelector('#upperCase');
const camelCaseOutput=document.querySelector('#camelCase');
const pascalCaseOutput=document.querySelector('#pascalCase');
const snakelCaseOutput=document.querySelector('#snakeCase');
const kebabCaseOutput=document.querySelector('#kebabCase');

function capitalizeString(str){
    return str[0].toUpperCase() + str.slice(1, str.length)

}

function camelCase(string){
    const lowerString=string.toLowerCase()
    const wordArray=lowerString.split('')
    const finallyArray=wordArray.map((word, i)=>{
        if(i===0) return word
        return capitalizeString(word)
    })
    return finallyArray.join('');

}

function pascalCase(string){
    const lowerString=string.toLowerCase()
    const wordArray=lowerString.split('')
    const finallyArray=wordArray.map((word,i)=>{
        return capitalizeString(word)
    })
    return finallyArray.join('');

}

function snakelCase(string){
const wordArray=string.split('')
   return wordArray.join('_');

}





function updateScreen(){
    lowerCaseOutput.innerText=input.value.toLowerCase();
    upperCaseOutput.innerText=input.value.toUpperCase();
    camelCaseOutput.innerText=camelCase(input.value);
    pascalCaseOutput.innerText=pascalCase(input.value);
    snakelCaseOutput.innerText=snakelCase(input.value);
}
updateScreen();

input.addEventListener('input',updateScreen)
