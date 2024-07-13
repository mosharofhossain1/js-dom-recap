const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

const msg = 'AssalamuAlikum! Kemon acen?💖💖✔✔';

// Method - 1
// button.addEventListener("click", function(){
//     message.innerText = msg;
//     console.log('events is connected');
// })

// Method - 2
/* onclick = ()=>{
    message.innerText = msg;
}

// Method - 3
const secretMsg = ()=>{
    message.innerText = msg;
} */

// Events 
// Event delegation
// Event propagation
// Stop Event Propagation
// Stop immadite Propagation

/* const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const items = document.querySelector('.items');
const list = document.querySelector('.list');

const parentHandler = ()=>{
    console.log('parent is clicked');
}

const chaildHandler = ()=>{
    console.log('child is clicked');
}

const itemsHandler = ()=>{
    console.log('ul is clicked')
}

const listHandler = ()=>{
    console.log('li is clickded')
}

parent.addEventListener('click', parentHandler)
child.addEventListener('click', chaildHandler);
items.addEventListener('click', itemsHandler);
list.addEventListener('click', listHandler);
 */

// event Delegation approche

const list = document.getElementById('list');
const addBtn = document.getElementById('addBtn');

// const liItems = document.getElementsByTagName('li');
// [...liItems].forEach((li)=>{
//     li.addEventListener('click', (event)=>{
//        li.remove();
//     })
// })


list.addEventListener('click', (e)=>{
    console.log(e.target);
   const li = e.target;
   list.removeChild(li);
});

const addHandler = ()=>{
    const li = document.createElement('li');
    li.textContent = 'NEw Item';
    list.append(li);
}

addBtn.addEventListener('click', addHandler);

