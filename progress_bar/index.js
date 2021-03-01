'use strict'

const progres=document.getElementById('progres');
const next=document.getElementById('next');
const prev=document.getElementById('prev');

const circle=document.querySelectorAll('.circle');

let curent=1;
next.addEventListener('click',()=>{
 curent++;
    if(curent>circle.length){
        curent=circle.length
    }

update()
})

prev.addEventListener('click',()=>{
curent--;

if(curent<1){
curent=1;
}


update()
})

const update=function(){

 circle.forEach((cir,i) => {i < curent ? cir.classList.add('activ') : cir.classList.remove('activ')});
 
 const active=document.querySelectorAll('.activ');
 progres.style.width=(active.length-2)/(circle.length-0.6) *100 +'%';
 if(curent===1){
    prev.disabled=false;
}else if(curent===circle.length){
    next.disabled=true;
}else{
 prev.disabled=false;
 next.disabled=false;
}

 
}
