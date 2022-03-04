
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
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('windows-scroll', window.scrollY > 0)
})
