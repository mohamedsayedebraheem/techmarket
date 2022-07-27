
let colors=["green","olive","aquamarine"];
let change = document.querySelector(".all");
let footer = document.querySelector(".footer");
let color1 =  document.querySelector(".color1");
let color2 =  document.querySelector(".color2");
let color3 =  document.querySelector(".color3");
let header1 = document.querySelector(".header1");
let header2 = document.querySelector(".header2");
let header3 = document.querySelector(".header3");



color1.onclick = function () {
    change.style.backgroundColor = colors[0];
    footer.style.backgroundColor = colors[0];
    header1.style.backgroundColor = colors[0];
    header2.style.backgroundColor = colors[0];
    header3.style.backgroundColor = colors[0];

};


color2.onclick = function () {
    change.style.backgroundColor = colors[1];
    footer.style.backgroundColor = colors[1];
    header1.style.backgroundColor = colors[1];
    header2.style.backgroundColor = colors[1];
    header3.style.backgroundColor = colors[1];

};


color3.onclick = function () {
    change.style.backgroundColor = colors[2];
    footer.style.backgroundColor = colors[2];
    header1.style.backgroundColor = colors[2];
    header2.style.backgroundColor = colors[2];
    header3.style.backgroundColor = colors[2];

};

