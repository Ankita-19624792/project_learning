const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
// console.log(randomColor());
let intervalId;
const ChangeColor = function() {
    if (!intervalId) {    //means if intervalId is null or undefined, then only start the interval
    intervalId = setInterval(changebgcolor, 1000);
    }
    function changebgcolor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const dontChangeColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};
document.querySelector('#start').addEventListener('click', ChangeColor)
document.querySelector('#stop').addEventListener('click', dontChangeColor)