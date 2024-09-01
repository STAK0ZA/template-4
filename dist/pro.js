"use strict";
// start make the functuality for the left-bar
let cats = document.querySelectorAll(".cats .box");
cats.forEach((e) => {
    e.addEventListener("click", () => {
        removandput(cats, e);
    });
});
// end make the functuality for the left-bar
// start the top-nav
let x = document.querySelector(".topbar .eye input");
let out = document.querySelector(".esc");
out.onclick = () => {
    x.value = "";
    out.style.display = "none";
};
x.oninput = () => {
    out.style.display = "block";
};
x.onblur = () => {
    if (x.value == "") {
        out.style.display = "none";
    }
};
// end the top-nav
// function for delete the calss active and put it in clicked
function removandput(all, current) {
    console.log(current);
    all.forEach((e) => {
        e.classList.remove("active");
    });
    current.classList.add("active");
}
// end make the functuality for the left-bar
//# sourceMappingURL=pro.js.map