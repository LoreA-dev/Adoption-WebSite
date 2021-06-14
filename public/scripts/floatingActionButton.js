const iconButton = document.querySelector('.floatingActionButton');
iconButton.addEventListener('click',()=>{
    window.scrollTo(0,0)

    window.scroll({
        top:0,
        behavior:'smooth'
    })
})
window.addEventListener('scroll' , ()=>{
    if(window.scrollY > 0){
        iconButton.style.bottom = "2rem"
    }
    else{
        iconButton.style.bottom = "-100%"

    }
})