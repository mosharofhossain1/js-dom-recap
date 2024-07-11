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