// console.log('CRUD Operation is start')
/* 
C = create 
R = Read 
U = Update 
D = Delete 
 */

// 1. Delete operation - 2 type delete operation 
    /* a> remove()
    b> removeChild() 
    */

// const list3 = document.querySelector('.list-3');
// console.log(list3.remove());

const childremove = document.querySelector('.list-item');
const list3 = document.querySelector('.list-3');
// childremove.removeChild(list3);

// innerText, textContent , innerHTML 
// 1. innerText Display te je output hoy setai 
// 2. textContent hocee html root tag er text  ea ja deya take ta 
// 3. innerHTML html tag debe / eta deya amra direct value addd korte pari javascript ea 
// list3.innerText = 'Hello From Js';
// list3.textContent = 'this is text content property';
// list3.innerHTML = 'hello from bd';
// list3.innerHTML = "<b style='color: red'>This is item-3</b>From js innerHTML";

//  append(), appendChild()

const newli = document.createElement('li');
newli.innerHTML = 'Item-6';

// childremove.append(newli)
// childremove.appendChild(newli)
childremove.prepend(newli)
