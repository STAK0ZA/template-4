let heart = document.querySelector("#heart") as HTMLImageElement

heart.addEventListener("click",()=>{
    if(heart.dataset.color == "notcolored")
    {
        heart.dataset.color = "colored"
        heart.src="../imgs/dashboard imgs/Latest Post/heart-solid.svg"
    }
    else{
        heart.dataset.color = "notcolored"
        heart.src="../imgs/dashboard imgs/Latest Post/heart-regular.svg"
    }
})