// to make this library modular, you can use require, EX: var b = require("./book.js"); 
// or module exports, EX: module.exports.addBookToShelf = function(shelf, Book) { shelf.push(Book); return shelf; }


function Library() {}

function Book(author, title) {
  this.author = author;
  this.title = title;
}

var addBookToShelf = function(shelf, Book) {
  shelf.push(Book);
  return shelf;
}

var removeBookFromShelf = function(shelf, title) {
    var index = shelf.indexOf(title);
    shelf.splice(index, 1);
    return shelf;
}

Library.prototype.addShelf = function (name) {
  library[name] = new Array(0);
}

Library.prototype.removeShelf = function (name){
delete library[name];
}

//example code
var book1 = new Book("Stephen Colbert", "my america");
var book2 = new Book("JRR Tolkien", "journey into the unknown");
var book3 = new Book("That one author", "awesome");

var library = new Library();

library.addShelf("Shelf1");
library.addShelf("Shelf2");
library.addShelf("CrookedShelf");

addBookToShelf(library.Shelf1, book1);
addBookToShelf(library.Shelf2, book2);
addBookToShelf(library.CrookedShelf, book3);

removeBookFromShelf(library.Shelf1, "my america");
library.removeShelf("CrookedShelf")
