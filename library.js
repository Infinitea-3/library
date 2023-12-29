const myLibrary = [];

function Book(title,author,pages,hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

const book1 = new Book("test","test2",3,true);
const book2 = new Book("test","test3",9,false);

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}

//Dialog Stuffs
const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitButton = document.getElementById("submitButton");

addBookButton.addEventListener("click", ()=>{
    dialog.showModal();
});

closeButton.addEventListener("click",()=>{
    dialog.close();
});

submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    const bookTitle = document.getElementById("bookTitle").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const bookPages = document.getElementById("bookPages").value;
    const hasRead = document.getElementById("hasRead").checked;
    const newBook = new Book(bookTitle, bookAuthor, bookPages, hasRead);
    myLibrary.push(newBook);
    displayLibrary();
    clearForm();
});

function clearForm(){
    var dialogBox = document.getElementById("libraryForm")
    dialogBox.reset()
}