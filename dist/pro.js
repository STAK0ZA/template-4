"use strict";
// start make the functuality for setting backup manager
// let cats:NodeListOf<Element> = document.querySelectorAll(".megaman .meg-div")
// cats.forEach((e)=>{
//     e.addEventListener("click",()=>{
//         removandput(cats,e)
//         cats.forEach((ele)=>{
//             let catchthedata=ele.firstElementChild as HTMLImageElement
//             catchthedata.src="../imgs/Setting/Backup Manager/server-solid.svg"
//             console.log(catchthedata.src)
//         })
//         let cok= e.firstElementChild as HTMLImageElement
//         cok.src="../imgs/Setting/Backup Manager/server-solid11.svg"
//         console.log("kko")
//         console.log(cok.src)
//         })
//     })
// end make the functuality for for setting backup manager
// // start the top-nav search
// let x =document.querySelector(".topbar .eye input") as HTMLInputElement
// let out=document.querySelector(".esc") as HTMLElement
// out.onclick=()=>{
//     x.value=""
//     out.style.display="none"
// }
// x.oninput= ()=>{
//     out.style.display="block"
// }
// x.onblur= ()=>{
//     if(x.value=="")
//     {
//         out.style.display="none"
//     }
// }
// // end the top-nav search
// // start the logic of the check btn
// let btn:NodeListOf<HTMLImageElement>=document.querySelectorAll(".common-btn")
// btn.forEach((e)=>{
//     e.addEventListener("click",()=>{
//         close(e)
//     })
// })
// function close(e:Element){
//     let x=e.lastElementChild as HTMLImageElement
//     if(x.src.toString()=="http://127.0.0.1:5500/imgs/Setting/Site%20Control&Security%20Info/circle-check-solid.svg"){
//         x.src="../imgs/Setting/Site Control&Security Info/circle-xmark-solid.svg"
//     }
//     else{
//         x.src="http://127.0.0.1:5500/imgs/Setting/Site%20Control&Security%20Info/circle-check-solid.svg"
//     }
//     e.classList.toggle("active")
//     x.classList.toggle("active")
// }
// // end the logic of the check btn
// change the color of heart
// let heart = document.querySelector("#heart") as HTMLImageElement
// heart.addEventListener("click",()=>{
//     if(heart.dataset.color == "notcolored")
//     {
//         heart.dataset.color = "colored"
//         heart.src="../imgs/dashboard imgs/Latest Post/heart-solid.svg"
//     }
//     else{
//         heart.dataset.color = "notcolored"
//         heart.src="../imgs/dashboard imgs/Latest Post/heart-regular.svg"
//     }
// })
// end the color of heart
// function for delete the calss active and put it in clicked
// function removandput(all:NodeListOf<Element>,current:Element){
// all.forEach((e)=>{
//     e.classList.remove("active")
// })
// current.classList.add("active")
// }
// end make the functuality for the left-bar
//# sourceMappingURL=pro.js.map