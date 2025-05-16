const myLibrary = [];

function Book(id, title, author, pages, read, description) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.description = description;
}
const gridContainer = document.querySelector(".gridContainer");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");
let description = document.querySelector("#description");

function addBookToLibrary(){
    let bookID = getRandomBookID();
    const bookObj = new Book(bookID, title.value, author.value, pages.value, read.value, description.value);
    myLibrary.push(bookObj);
    const book = getBookElement(bookObj, bookID);
    gridContainer.appendChild(book);
}

function getBookElement(book, bookID){
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.id = bookID;
    bookElement.innerHTML =`
        <h3>${book.title}</h3>
        <p>Autore: ${book.author}</p>
        <p>Pagine: ${book.pages}</p>
        <p>Letto: ${book.read}</p>
        <p>${book.description}</p>
        <button class=${"bookBtn"} id=${bookID}>Remove</button>
        `;
        return bookElement;
}

function getRandomBookID(){
    return self.crypto.randomUUID();
}
const submit = document.querySelector("#submit");
submit.addEventListener("click", submitClick, false);

function submitClick(event){
    event.preventDefault();
    addBookToLibrary();
}