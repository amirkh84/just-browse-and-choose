function add() {
    let bb = document.body;
    let dd = document.createElement("div");
    dd.classList.add("box");
    bb.innerHTML += ("<div class = 'box' ><div class = 'color1'></div><div class = 'color2'></div></div>");
};
let load = 100;
for (let ii = 0; ii < load; ii++) {
    add()
};
let color1 = document.getElementsByClassName("color1");
let color2 = document.getElementsByClassName("color2");
function gen() {
    const vv = Math.floor(Math.random()*16777215).toString(16);
    const vvv = "#" + vv;
    return vvv;
};
for (let i = 0; i < color1.length; i++) {
    color1[i].setAttribute("style" , "background-color:" + gen());
    color2[i].setAttribute("style" , "background-color:" + gen());
};