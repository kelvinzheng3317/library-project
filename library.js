let library = [];
const bookshelf = document.querySelector('.bookshelf');

const prompt = document.querySelector('.prompt');
const titleInput = document.querySelector('#getTitle');
const authorInput = document.querySelector('#getAuthor');
const pagesInput = document.querySelector('#getPages');
const readStatus = document.querySelector('#getReadStatus');

const addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', () => {
    prompt.style.opacity = 1;
})

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', addNewBook);

function Book(title, author, numPages, readStatus=false) {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.readStatus = readStatus
}

function addBookToLibrary(aBook) {
    // check to make sure argument is a book
    if (aBook.constructor != Book) {
        console.log('Not a book');
        return;
    }
    library.push(aBook);
}

function updateLibrary() {
    let bookshelfHTMl = "";
    library.forEach(book => {
        bookshelfHTMl += 
        `<div class="book">
            <p class="title">${book.title}</p>
            <p class="author">${book.author}</p>
            <p class="pages">${book.numPages} pages</p>
        </div>`
    });
    bookshelf.innerHTML = bookshelfHTMl;
}

function addNewBook() {
    console.log(titleInput.value);
    console.log(authorInput.value);
    console.log(pagesInput.value);
    console.log(readStatus.input);
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readStatus.value);
    addBookToLibrary(newBook);
    updateLibrary();
    prompt.style.opacity = 0;
}


book1 = new Book('Life of Stupid', 'Elon Musk', 250);
book2 = new Book('Invisible', 'John Cena', 157, true);

addBookToLibrary(book1);
addBookToLibrary(book2);

updateLibrary();

/*
function Animal(name) {
    this.name = name;
}

function Cat() {
    this.paws = 4;
    this.meow = function() {
        console.log('meow');
    }
}

const animal1 = new Animal('yee');
const cat1 = new Cat();

// console.log(Cat.prototype);
// console.log(Animal.prototype);
// console.log(Object.getPrototypeOf(cat1));
console.log('pause');
console.log(cat1.constructor.prototype);

Object.setPrototypeOf(Cat.prototype, Animal.prototype);
const cat2 = new Cat();
// console.log(Object.getPrototypeOf(cat1));
// console.log(Object.getPrototypeOf(cat1.__proto__.__proto__));
console.log(cat2.constructor.prototype);
console.log(cat2.constructor.prototype.constructor.prototype);
*/