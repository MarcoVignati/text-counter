let stats = document.querySelector('.status');
let text = document.querySelector('#text');
let char = document.querySelector('#char');
let words = document.querySelector('#words');
let lines = document.querySelector('#lines');
let symbols = document.querySelector('#symbols');

function count() {

    if (text.value.length === 0) {
        stats.style.display = "none";
    }

    else {
        stats.style.display = "block";

        char.innerHTML = text.value.length + " Characters | ";
        words.innerHTML = text.value.trim().split(/\s+/).length + " Words | ";
        lines.innerHTML = text.value.split("\n").length + " Lines | ";
        symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,|´`ºª§¹²³£¢¬?/-]/).length + " Symbols"

    }
}

text.addEventListener("input", count);