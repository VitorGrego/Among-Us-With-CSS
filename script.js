const body1 = document.querySelector('.inside');
const bodySecond2 = document.querySelector('.player');
const legsOne2 = document.querySelector('.leg-1');
const legsTwo2 = document.querySelector('.leg-2');
const bag1 = document.querySelector('.bag');
const bagTop2 = document.querySelector('.bag-top');
const p1 = document.querySelector('.p');

function changeColor(r,g,b){
    console.log(`rgb(${ r * 1/2 +','+ g * 1/2 +','+ b * 1/2 })`)

    body1.style.backgroundColor = `rgb(${r+','+g+','+b})`;
    bodySecond2.style.backgroundColor = `rgb(${ r * 1/2 +','+ g * 1/2 +','+ b * 1/2 })`;
    legsOne2.style.backgroundColor = `rgb(${ r * 1/2 +','+ g * 1/2 +','+ b * 1/2 })`;
    legsTwo2.style.backgroundColor = `rgb(${ r * 1/2 +','+ g * 1/2 +','+ b * 1/2 })`;
    bag1.style.backgroundColor = `rgb(${ r * 1/2 +','+ g * 1/2 +','+ b * 1/2 })`;
    bagTop2.style.backgroundColor = `rgb(${r+','+g+','+b})`;
    p1.style.backgroundColor = `rgb(${r+','+g+','+b})`;
}

// function changeColorNew(r, g, b) {
//     body1.style.backgroundColor = `rgb(${r+','+g+','+b})`;
//     bodySecond2.style.backgroundColor = `rgb(${ r * 1/2 +','+ g * 1/2 +','+ b * 1/2 })`;
// }