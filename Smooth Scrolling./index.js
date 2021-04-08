'use strict'
const section2=document.querySelector("#section--2");
const btn=document.querySelector(".btn");

btn.addEventListener('click',()=>{
//    const section2Scrol=section2.getBoundingClientRect();
//  console.log(section2Scrol)


    section2.scrollIntoView({
        behavior:"smooth",
    })
})
