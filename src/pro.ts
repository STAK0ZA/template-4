// start make the functuality for the left-bar
let cats:NodeListOf<Element> = document.querySelectorAll(".cats .box")
cats.forEach((e)=>{
    e.addEventListener("click",()=>{
        removandput(cats,e)
        })
    })
// end make the functuality for the left-bar
// function for delete the calss active and put it in clicked
function removandput(all:NodeListOf<Element>,current:Element){
console.log(current)
all.forEach((e)=>{
    e.classList.remove("active")
})
current.classList.add("active")
}
// end make the functuality for the left-bar