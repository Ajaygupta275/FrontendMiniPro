const fullDarkModeCheckbox=document.querySelector('#full-dark-mode')
const containerMode=document.querySelector('#contained-dark-mode')
const container=document.querySelector('.container')

fullDarkModeCheckbox.addEventListener('change',()=>{
    if(fullDarkModeCheckbox.checked){
        document.body.classList.add('dark')

    }else{
        document.body.classList.remove('dark')
    }
})

containerMode.addEventListener('change',()=>{
    if(containerMode.checked){
        container.classList.add('dark')

    }else{
        container.classList.remove('dark')
    }
})