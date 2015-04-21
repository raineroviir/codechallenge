// to make this library modular, use module exports, EX: module.exports.Shelf = //shelf constructor code

function Library() {}

Library.prototype.addShelf = function (shelfName)
{
  return this[shelfName] = new Shelf();
}

Library.prototype.removeShelf = function (shelfName)
{
  delete this[shelfName];
  return this
}

function Shelf() {}

Shelf.prototype.add = function(bookName, author, pages)
{
  this[bookName] = new Book(author, pages);
  return this
}

Shelf.prototype.remove = function(bookName)
{
  delete this[bookName];
  return this
}

function Book(author, pages) {
  this.author = author
  this.pages = pages
}

//some data to populate the library:

var library = new Library();

library.addShelf("Shelf1").add("My America","Stephen Colbert", 500).add("Journey into the unknown", "JRR Tolkien", 999).remove("My America").remove("Journey into the unknown")
library.addShelf("Shelf99").add("Awesome", "That one author", 7).add("Journey into the unknown", "JRR Tolkien", 999)
library.removeShelf("Shelf1")
library.addShelf("Shelf98").add("Game of Thrones", "GRR Martin", 99).add("My America","Stephen Colbert", 500)
library.addShelf("Shelf97").add("Game of Thrones", "GRR Martin", 99).add("My America","Stephen Colbert", 500)
library.addShelf("Shelf96").add("Game of Thrones", "GRR Martin", 99).add("Journey into the unknown", "JRR Tolkien", 999)


//additionaly functionality, searches the library
//returns an array containing all the shelves the book is on.

Library.prototype.search = function(bookName)
{
  var result = [];

  for(var x in this)
  {
      if (typeof this[x][bookName] !== 'undefined' && typeof x !== 'undefined')
      {
      result.push(x);
      }
  }
  return result
}

library.search("Game of Thrones")


