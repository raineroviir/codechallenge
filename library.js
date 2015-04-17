// to make this library modular, use module exports, EX: module.exports.Shelf = //shelf constructor code

function Library()
{
  this.addShelf = function (shelfName)
  {
    return this[shelfName] = new Shelf();
  }
  this.removeShelf = function (shelfName)
  {
    delete this[shelfName];
    return this
  }
}

function Shelf()
{
  this.remove = function(bookName)
  {
    delete this[bookName]
    return this
  }
  this.add = function(bookName, author)
  {
    this[bookName] = author;
    return this
  }
}

//some data to populate the library:

var library = new Library();

library.addShelf("Shelf1")
.add("my america","Stephen Colbert")
.add("journey into the unknown", "JRR Tolkien")
.remove("my america")
.remove("journey into the unknown")

library.addShelf("Shelf99").add("awesome", "that one author")
library.removeShelf("Shelf1")

