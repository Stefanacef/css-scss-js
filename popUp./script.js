const btnPop = document.querySelector('.btn--pop');
const container = document.querySelector('.container');
const icon = document.querySelector('.icon')
const btnOk=document.querySelector('.btn-ok')


btnPop.addEventListener('click',function(){
  
container.classList.remove('none');
this.classList.add('none');



})
icon.addEventListener('click',()=>{
container.classList.add('none');
btnPop.classList.remove('none');
})

btnOk.addEventListener('click',(e) => e.preventDefault());
