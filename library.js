//Creating Library Array
const myLibrary = [];

//Creating The Book Object
function Book(title,author,pages,hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function fullName(item){
    var fullname = [item.title,item.author,item.pages,item.hasRead].join(" ");
    return fullname;
}

function mainFunction(){
    myLibrary.forEach(function(item){
        var listItem = document.createElement('li');
        listItem.innerText = fullName(item);
        document.getElementById("mainLibrary").appendChild(listItem);
    })
}

//Displaying the Library When Called
function displayLibrary(libraryArray){
    for (let i = 0; i < libraryArray.length; i++){
        console.log(libraryArray[i]);
        console.log(libraryArray);
    }
    mainFunction();
}

//Clear Dialog (After Books Are Submitted)
function clearForm(){
    var dialogBox = document.getElementById("libraryForm")
    dialogBox.reset()
}

//Dialog Generator
const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitButton = document.getElementById("submitButton");

addBookButton.addEventListener("click", ()=>{
    dialog.showModal();
});

closeButton.addEventListener("click",()=>{
    dialog.close();
    displayLibrary(myLibrary);
});

submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    const bookTitle = document.getElementById("bookTitle").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const bookPages = document.getElementById("bookPages").value;
    const hasRead = document.getElementById("hasRead").checked;
    const newBook = new Book(bookTitle, bookAuthor, bookPages, hasRead);
    myLibrary.push(newBook);
    clearForm();
});

