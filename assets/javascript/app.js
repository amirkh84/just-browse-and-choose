//adds a new color platte
function add() {
    let bb = document.body;
    let dd = document.createElement("div");
    dd.classList.add("box");
    bb.innerHTML += ("<div class = 'box' ><div class = 'color1'><p class = 'hex'></p></div><div class = 'color1'><p class='hex'></div><div class = 'color1'><p class='hex'></div></div>");
};
//this will add color plattes till the "ii" equals to the "load number"
let load = 100;
for (let ii = 0; ii < load; ii++) {
    add()
};
//variables
let color1 = document.getElementsByClassName("color1");
let hex = document.getElementsByClassName("hex");
//the hex color generator
function gen() {
    let symbols , color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for (let ic = 0; ic<6; ic++) {
        color = color + symbols[Math.floor(Math.random() * 16 )];
    };
    return color;
};
//adding colors and hex codes
for (let i = 0; i < color1.length; i++) {
    let getcolor = gen();
    color1[i].setAttribute("style" , "background-color:" + getcolor);
    hex[i].innerText = getcolor;
};