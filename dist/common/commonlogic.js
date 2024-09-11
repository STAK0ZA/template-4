"use strict";
// start the top-nav search
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
// end the top-nav search
//# sourceMappingURL=commonlogic.js.map