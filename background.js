const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["red","blue",'green','yellow','white'];
body.style.backgroundColor = 'viol';
button.addEventListener('click', () => {
    const colorIndex =  parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex];
    console.log("hiii");
})
