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
childremove.removeChild(list3);
