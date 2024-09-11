// start the logic of the check btn
let btn:NodeListOf<HTMLImageElement>=document.querySelectorAll(".common-btn")
btn.forEach((e)=>{
    e.addEventListener("click",()=>{
        close(e)
        
    })
})
function close(e:Element){
    let x=e.lastElementChild as HTMLImageElement
    if(x.src.toString()=="http://127.0.0.1:5500/imgs/Setting/Site%20Control&Security%20Info/circle-check-solid.svg"){
        x.src="../imgs/Setting/Site Control&Security Info/circle-xmark-solid.svg"
    }
    else{
        x.src="http://127.0.0.1:5500/imgs/Setting/Site%20Control&Security%20Info/circle-check-solid.svg"
    }
    e.classList.toggle("active")
    x.classList.toggle("active")
}
// end the logic of the check btn