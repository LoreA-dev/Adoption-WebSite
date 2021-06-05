const header = document.querySelector('header')

window.addEventListener('scroll', ()=>{
    console.log(window.scrollY)
    if(window.scrollY > 0){
        header.classList.add('shadow')
    }
    else{
        header.classList.remove('shadow')

    }
})