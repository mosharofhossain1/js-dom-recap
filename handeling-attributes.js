// Handeling Attributes 

// console.log('handle attributes')

const lights = {
    on : "https://www.w3schools.com/js/pic_bulbon.gif",
    off : "https://www.w3schools.com/js/pic_bulboff.gif"
}

const light = document.getElementById('light');
const offBtn = document.getElementById('off');
const onBtn = document.getElementById('on');

onBtn.addEventListener('click', function(){
    light.src = lights.on
})

offBtn.addEventListener('click', function(){
    light.src = lights.off
})


// box design

const box = document.getElementById('box');
const btn = document.getElementById('changeColor')

const colors = ['red', 'green', 'pink', 'tomatto', 'yellow'];

btn.addEventListener('click', function(){
    const randomColor = Math.floor(Math.random() * 5)
    box.style.backgroundColor = colors[randomColor]
})

setInterval(()=>{
    const randomColor = Math.floor(Math.random() * 5)
    box.style.backgroundColor = colors[randomColor]
}, 500)