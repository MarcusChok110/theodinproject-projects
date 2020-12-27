let myLibrary = [];
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary(theHobbit);

let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function() {
    let formTitle = document.querySelector("#title");
    let formAuthor = document.querySelector("#author");
    let formPages = document.querySelector("#pages");
    let formRead = document.querySelector("#read");
    addBookToLibrary(new Book(
        formTitle.value,
        formAuthor.value,
        formPages.value,
        formRead.value === "true"
    ));
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formRead.value = "";
});

let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", bookForm);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayLibrary();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}

function displayLibrary() {

    let lib = document.querySelector("#library");

    // clear the library container
    while(lib.lastElementChild) {
        lib.removeChild(lib.lastElementChild);
    }

    // add the books in myLibrary to the library container
    for (let i = 0; i < myLibrary.length; i++) {

        let book = myLibrary[i];

        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.setAttribute("id", "" + i);

        for (let element in book) {
            let property = document.createElement("div");
            
            if(element == "read") {
                property.textContent = book[element] ? "Read" : "Unread";
            } else {
                property.textContent = book[element];
            }
            
            property.classList.add("book-element");
            property.classList.add(element);

            bookDiv.appendChild(property);
        }

        let rmBtn = document.createElement("button");
        rmBtn.textContent = "Remove Book";
        rmBtn.addEventListener("click", function() {
            deleteBook(i);
        });

        let readBtn = document.createElement("button");
        readBtn.textContent = "Toggle Read";
        readBtn.addEventListener("click", function() {
            if (book.read) {
                book.read = false;
            } else {
                book.read = true;
            }
            displayLibrary();
        });

        let btnDiv = document.createElement("div");
        btnDiv.append(rmBtn, readBtn);
        btnDiv.setAttribute("id", "buttons")
        
        bookDiv.appendChild(btnDiv);

        lib.appendChild(bookDiv);
    }
}

function bookForm() {
    let form = document.querySelector("#book-form");

    let displayed = form.style.display;

    form.style.display = displayed == "none" ? "grid" : "none";
}