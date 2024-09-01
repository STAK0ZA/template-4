// start make the functuality for the left-bar
let cats:NodeListOf<Element> = document.querySelectorAll(".cats .box")
cats.forEach((e)=>{
    e.addEventListener("click",()=>{
        removandput(cats,e)
        })
    })
// end make the functuality for the left-bar
// start the top-nav
let x =document.querySelector(".topbar .eye input") as HTMLInputElement
let out=document.querySelector(".esc") as HTMLElement
out.onclick=()=>{
    x.value=""
    out.style.display="none"
}
x.oninput= ()=>{
    out.style.display="block"
}
x.onblur= ()=>{
    if(x.value=="")
    {
        out.style.display="none"
    }
}
// end the top-nav
// function for delete the calss active and put it in clicked
function removandput(all:NodeListOf<Element>,current:Element){
console.log(current)
all.forEach((e)=>{
    e.classList.remove("active")
})
current.classList.add("active")
}
// end make the functuality for the left-bar