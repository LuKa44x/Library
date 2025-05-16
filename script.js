const myLibrary = [];

function Book(id, title, author, pages, read, description) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.description = description;
}

function addBookToLibrary(){
    const book = new Book(getBookID(),title.value, author.value, pages.value, read.value, description.value);
    myLibrary.push(book);
}
let title = document.querySelector("#title");
console.log(title.value);
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");
let description = document.querySelector("#description");

function getRandomBookID(){
    return self.crypto.randomUUID();
}
const submit = document.querySelector("#submit");
submit.addEventListener("click", submitClick, false);

function submitClick(event){
    event.preventDefault();
    addBookToLibrary();
}