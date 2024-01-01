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
    var fullname = [item.title,item.author,item.pages].join(" ");
    return fullname;
}

function mainFunction(){
    myLibrary.forEach(function(item){
        //Create Element
        var listItem = document.createElement('li');
        listItem.innerText = fullName(item);
        document.getElementById("mainLibrary").appendChild(listItem);
        
        //Create Read/Not Read Button
        var readButton = document.createElement("button");
        var status = "Read";
        console.log(item.hasRead);
        if (item.hasRead == false){
            status = "Not Read";
        }
        readButton.innerHTML = status;
        document.getElementById("mainLibrary").appendChild(readButton);
        readButton.addEventListener("click", function(){
            if(readButton.innerHTML == "Read"){
                readButton.innerHTML = "Not Read";
            } else {
                readButton.innerHTML = "Read";
            }
        });    

        //Create Cancel Button
        var cancelButton = document.createElement("button");
        cancelButton.innerHTML = "Cancel";
        document.getElementById("mainLibrary").appendChild(cancelButton);

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

