const hamburger = document.getElementById('hamburger')
const imgNormal = document.getElementById('normal')
const imgClose = document.getElementById('close')
const menu = document.getElementById('menu')

hamburger.addEventListener('click', function(e){
    if(menu.classList.contains('show')){
        menu.classList.remove('show')
        imgNormal.classList.remove('hide')
        imgClose.classList.add('hide')
    }else{
        menu.classList.add('show')
        imgNormal.classList.add('hide')
        imgClose.classList.remove('hide')
    }
})