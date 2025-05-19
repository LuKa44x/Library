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
let inputText = document.querySelectorAll("input[type='text']");

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
        <h3 class=${"bookContent"}>${book.title}
        <p>${book.author}</p></h3>
        <p class=${"bookContent"}>Pages: ${book.pages}</p>
        <p class=${"bookContent"}>${book.description}</p>
        <p class=${"bookContent"}>Read: ${book.read}</p>
        <button class=${"bookBtn"} id=${bookID}>Remove</button>
        `;
        let removeBtn = bookElement.querySelector(".bookBtn");
        removeBookEvent(removeBtn);
        return bookElement;
}

function removeBookEvent(removeBtn){
removeBtn.addEventListener("click", (e)=>{
        let idValue = e.target.id;
        let div = document.getElementById(idValue);
        div.remove();
        removeBookFromArray(idValue);
   });
}

function removeBookFromArray(idValue){
    const index= myLibrary.findIndex((element) =>{
        return element.id ===idValue;
    });
    myLibrary.splice(index,1);
}

function getRandomBookID(){
    return self.crypto.randomUUID();
}
const submit = document.querySelector("#submit");
submit.addEventListener("click", submitClick, false);

function submitClick(event){
    event.preventDefault();
    addBookToLibrary();
    resetForm();
}

const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    dialog.close();
});

function resetForm(){
    inputText.forEach(input => {
    input.value ="";
});
}

const dialog = document.querySelector(".addNewBook");
const dialogBtn = document.querySelector(".dialogBtn");
dialogBtn.onclick = () => dialog.showModal();
