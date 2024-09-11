let cats:NodeListOf<Element> = document.querySelectorAll(".megaman .meg-div")
cats.forEach((e)=>{
    e.addEventListener("click",()=>{
        removandput(cats,e)
        cats.forEach((ele)=>{
            let catchthedata=ele.firstElementChild as HTMLImageElement
            catchthedata.src="../imgs/Setting/Backup Manager/server-solid.svg"
        })
        let cok= e.firstElementChild as HTMLImageElement
        cok.src="../imgs/Setting/Backup Manager/server-solid11.svg"
        })
    })
// function for delete the calss active and put it in clicked
function removandput(all:NodeListOf<Element>,current:Element){
    all.forEach((e)=>{
        e.classList.remove("active")
    })
    current.classList.add("active")
}
// end make the functuality for the left-bar