// console.log(document);

// console.log(document.body)
// console.log(document.title);
// console.log(document.head)

// Selecting elements / nodes from DOM
// 1. document.getElementById() // return a single element node 
/* const heading = document.getElementById('heading1');
// console.log(heading);
console.log(heading.innerText);

// 2. document.getElementsByClassName() // return HTMLCollection this is called array like object. tobe amra pratomik vabe simple for loop use kore iterate korte pari / force kore array te change kora jai and jekuno operation calanu jai

const itemsList = document.getElementsByClassName('item')
// console.log(itemsList);

// for(let item of itemsList){
//     console.log(item)
// }

// array like object ke array te convert korar system
// 1. Array.from Use 
Array.from(itemsList);
console.log(itemsList);

// 2. object.assign use 
Object.assign([], itemsList);
console.log(itemsList);

// 3. spreed operator[...itemsList]
[...itemsList].forEach((item)=>{
    console.log(item.innerText)
});

 */

/* const obj = {
    a:10,
    b:12
}

Array.from(obj).forEach((a)=>{
    console.log(a)
}) */


// 3. document.getElementsByTagName() // retturn HTMLCollection 
const pera = document.getElementsByTagName('p')
// console.log(pera)

// 4. document.getElementsByTagName() // rteturn a nodelist - direct array method used kora jai alada kore array te convert korte hoy na 

const tagsName = document.getElementsByName('firstName');
// console.log(tagsName)

// 5. document.querySelector() // return a single element node 
const items = document.querySelector('ul .item');
// console.log(items)

// 6. document.querySelectorAll()   // return a nodelist -direct array method used kora jai alada kore array te convert korte hoy na

const allItem = document.querySelectorAll('ul .item')
// console.log(allItem)

// 7. parentElement
const chaild = document.querySelector('.chaild')
// console.log(chaild.parentElement)
// console.log(chaild.parentNode)

 const child= document.querySelector('ul');
//  console.log(child.childNodes)
//  console.log(child.children)

const firstElement = document.querySelector('.list-item');
// console.log(firstElement.firstChild)
// console.log(firstElement.firstElementChild)
// console.log(firstElement.lastChild)
// console.log(firstElement.lastElementChild)


// siblings elements 
const siblings = document.querySelector('.list-item');
console.log(siblings.previousSibling);
console.log(siblings.previousElementSibling);
console.log(siblings.nextSibling);
console.log(siblings.nextElementSibling);
