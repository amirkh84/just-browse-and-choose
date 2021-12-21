//adds a new color platte
function add() {
    let bb = document.body;
    let dd = document.createElement("div");
    dd.classList.add("box");
    bb.innerHTML += ("<div class = 'box' ><div class = 'color1'><p class = 'hex'></p></div><div class = 'color2'><p class='hex2'></div></div>");
};
//this will add color plattes till the "ii" equals to the "load number"
let load = 100;
for (let ii = 0; ii < load; ii++) {
    add()
};
//variables
let color1 = document.getElementsByClassName("color1");
let color2 = document.getElementsByClassName("color2");
let hex = document.getElementsByClassName("hex");
let hex2 = document.getElementsByClassName("hex2");
//the hex color generator
function gen() {
    const vv = Math.floor(Math.random()*16777215).toString(16);
    const vvv = "#" + vv;
    return vvv;
};
//adding hex codes to color boxes and show the hex code
for (let i = 0; i < color1.length; i++) {
    let getcolor = gen();
    color1[i].setAttribute("style" , "background-color:" + getcolor);
    hex[i].innerText = getcolor;
    let getcolor2 = gen();
    color2[i].setAttribute("style" , "background-color:" + getcolor2);
    hex2[i].innerText = getcolor2;
};