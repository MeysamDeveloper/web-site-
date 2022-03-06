
var barClick = document.getElementById('bar-btn')
var close_Bar_Btn = document.getElementById('close-bar-btn')
var ulVar = document.getElementById('nav-id')

//.............................................................
//barClick.addEventListener('click',)
function barFunction() {
    ulVar.classList.add('nav-class2')
    close_Bar_Btn.classList.add('btn-bar-class-close2')
    barClick.classList.add('btn-bar-class2')
}
//.............................................................
//close_Bar_Btn.addEventListener('click',)
function closeBarFunction() {
    ulVar.classList.remove('nav-class2')
    close_Bar_Btn.classList.remove('btn-bar-class-close2')
    barClick.classList.remove('btn-bar-class2')
}
//..............................................................
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('windows-scroll', window.scrollY > 0)
})
//............................................................

var discreabe_btn = document.querySelectorAll('#positive-id-select')
discreabe_btn.forEach(dis => {
    dis.addEventListener('click', () => {
        var parent = dis.parentElement
        parent.classList.toggle('discreabe2');
    })
})
//............................................................
var number_slider = 0;
function left() {
    var curent_slide = document.getElementById(`slider-${number_slider}`)
    curent_slide.classList.add('disable')
    if(number_slider == 3){
        number_slider = 0;
    }else{
        number_slider ++;
    }
    var curent_slide = document.getElementById(`slider-${number_slider}`)
    curent_slide.classList.remove('disable')
    curent_slide.classList.add('active')

    
}
function right() {
    var curent_slide = document.getElementById(`slider-${number_slider}`)
    curent_slide.classList.add('disable')
    if(number_slider == 0){
        number_slider = 3;
    }else{
        number_slider --;
    }
    var curent_slide = document.getElementById(`slider-${number_slider}`)
    curent_slide.classList.remove('disable')
    curent_slide.classList.add('active')    
}
//......................................................................................