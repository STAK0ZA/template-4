"use strict";
let cats = document.querySelectorAll(".megaman .meg-div");
cats.forEach((e) => {
    e.addEventListener("click", () => {
        removandput(cats, e);
        cats.forEach((ele) => {
            let catchthedata = ele.firstElementChild;
            catchthedata.src = "../imgs/Setting/Backup Manager/server-solid.svg";
        });
        let cok = e.firstElementChild;
        cok.src = "../imgs/Setting/Backup Manager/server-solid11.svg";
    });
});
// function for delete the calss active and put it in clicked
function removandput(all, current) {
    all.forEach((e) => {
        e.classList.remove("active");
    });
    current.classList.add("active");
}
// end make the functuality for the left-bar
//# sourceMappingURL=setting.js.map