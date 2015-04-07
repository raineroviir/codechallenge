// to make this library modular, you can use require, EX: var b = require("./book.js"); 
// or module exports, EX: module.exports.addBookToShelf = function(shelf, Book) { shelf.push(Book); return shelf; }


function Library() {}

function Book(author, title) {
  this.author = author;
  this.title = title;
}

function Shelf() {

}

Array.prototype.addBookToShelfTwo = function(Book) {
  this.push(Book);
  return this;
}

Array.prototype.removeBookFromShelf = function(title) {
  var index = this.indexOf(title);
  this.splice(index, 1);
  return this;
}

Library.prototype.addShelf = function (name) {
  library[name] = new Array(0);
}

Library.prototype.removeShelf = function (name){
delete library[name];
}

var book1 = new Book("Stephen Colbert", "my america");
var book2 = new Book("JRR Tolkien", "journey into the unknown");
var book3 = new Book("That one author", "awesome");

var library = new Library();

library.addShelf("Shelf1");
library.addShelf("Shelf2");
library.addShelf("CrookedShelf");

library.removeShelf("CrookedShelf")

library.Shelf1.addBookToShelf(book2)
library.Shelf1.addBookToShelf(book3)
library.Shelf1.addBookToShelf(book1)

library.Shelf1.removeBookFromShelf("journey into the unknown")

library;
