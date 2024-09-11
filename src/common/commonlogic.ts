// start the top-nav search
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
// end the top-nav search