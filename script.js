const searchBook = document.getElementById("searchBook");
const allBookList = document.getElementById("allBookList");
const BookTitleInput = document.getElementById("BookTitle");
const BookAuthorInput = document.getElementById("BookAuthor");
const BookEditionInput = document.getElementById("BookEdition");
const searchInput = document.getElementById("searchInput");
const books = [
    {title: "HTML", author: "xyz", edition:"4th"},
    {title: "Hacking", author: "abc", edition:"5th"},
    {title: "Javascript", author: "abc", edition:"6th"},
    {title: "CSS", author: "abc", edition:"2nd"},
    {title: "C++&C", author: "xyz", edition:"3rd"}
];

function addNewBook() {
    const title = BookTitleInput.value.trim();
    const author = BookAuthorInput.value.trim();
    const edition = BookEditionInput.value.trim();

    if (title === "" || author === "" || edition === "") {
        alert("Please Fill all Fields...");
        return;
    }

  
    if (books.some((book) => book.title === title)) {
        alert("This book is already ADDED...");
        return;
    }

    const book = {
        title: title,
        author: author,
        edition: edition,
    };

    books.push(book);
    clearInputFields();
    updateBookList();
}

function clearInputFields() {
    BookTitleInput.value = "";
    BookAuthorInput.value = "";
    BookEditionInput.value = "";
}

function updateBookList() {
    searchBook.innerHTML = "";
    allBookList.innerHTML = "";
    const searchText = searchInput.value.toLowerCase();

    for (const book of books) {
        const li = document.createElement("li");
        li.textContent = `Title: ${book.title}, Author: ${book.author}, Edition: ${book.edition}`;
    
        allBookList.appendChild(li);

        if (
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText) ||
            book.edition.toLowerCase().includes(searchText)
        ) {
            const searchedLi = document.createElement("li");
            searchedLi.textContent = `Title: ${book.title}, Author: ${book.author}, Edition: ${book.edition}`;
            searchBook.appendChild(searchedLi);
        }
    }
}

function searchBooks() {
    updateBookList();
}

function showAllBooks() {
    searchBook.innerHTML = "";
    allBookList.innerHTML = "";

    for (const book of books) {
        const li = document.createElement("li");
        li.textContent = `Title: ${book.title}, Author: ${book.author}, Edition: ${book.edition}`;
        allBookList.appendChild(li);
    
    }
}