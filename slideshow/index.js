'use strict'
let panel=document.querySelectorAll('.panel');
console.log(panel);//node list!!

panel.forEach(pan => {//cand ai .ai multe elemete, care  iti returneaza node list, care se trateaza ca si array
    pan.addEventListener('click',function(){
     stergeActiv()
     pan.classList.add('activ');
     console.log(pan.classList)
    })

});
const stergeActiv=function(){
  panel.forEach(pan=>pan.classList.remove('activ'))//am uitat class list !!!! mama lui de clas list !!!
}
