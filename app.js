document.addEventListener('DOMContentLoaded', function(){

// const titles = document.getElementsByClassName('title');
// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// const books = document.querySelector('#book-list li .name');
// console.log(books)


// for(i=0; i < books.length; i++){
//     console.log(books[i]);
// }
// var books = document.querySelectorAll('#book-list li .name');
// Array.from(books).forEach(function(book){
//     console.log(book.textContent);
// })

// var bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h5> Hallelujah, I\'m getting DOM </h5>;'
// var banner = document.querySelector('#page-banner');
// console.log('#page-banner node type is: ', banner.nodeType);

// var banner = document.querySelector('#page-banner');
// banner.cloneNode(true);

// var bookList = document.querySelector('#book-list');
// console.log(bookList.parentNode);

// console.log(bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += 'Yes';



// //Delete Button
// var deleteButton = document.querySelectorAll('#book-list .delete');
// for(i=0; i < deleteButton.length; i++){
//     deleteButton[i].addEventListener('click', function(e){
//         var getLi = e.target.parentElement;

//         getLi.parentNode.removeChild(getLi);
//     })
// }

// Delete Book
const list = document.querySelector('#book-list ul');

//Delete book
list.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
        const li = e.target.parentElement
        list.removeChild(li);
    }
})

// Add book
const addBook = document.forms['add-book'];
addBook.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addBook.querySelector('input[type="text"]').value
    
//Create the list, name and button
    var li = document.createElement('li');
    var bookName = document.createElement('span');
    var deleteBtn = document.createElement('span');

//set the contents of the list and button
    bookName.textContent = value
    deleteBtn.textContent = "delete"

// Add Class Name
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
   
// Append to the ul
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li)


})

//Hide books
const hideBooks = document.querySelector('#hide');
hideBooks.addEventListener('change', function(e){
    if(hideBooks.checked){
        list.style.display = 'none';
    }else{
        list.style.display = 'block';
    }
})

//Search Books
const searchBook = document.forms['search-books'].querySelector('input');
searchBook.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    for(i=0; i < books.length; i++){
        const title = books[i].firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) !== -1){
            books[i].style.display = 'block';
        }else{
            books[i].style.display = 'none';
        }
    }


})

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        for(i=0; i < panels.length; i++){
            if(panels[i] === targetPanel){
                panels[i].classList.add('active');
            }else{
                panels[i].classList.remove('active');
            }
        }
    }
})

})

