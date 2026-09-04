/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// --- Starter TypeScript Code ---
// A simple Book class
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
var reviews = [];
function addReview(bookId, rating, comment) {
    reviews.push({ bookId: bookId, rating: rating, comment: comment });
}
// Function to display book information
function displayBook(book) {
    var bookList = document.getElementById("book-list");
    if (!bookList)
        return;
    var bookDiv = document.createElement("div");
    bookDiv.innerHTML = "\n    <h2>".concat(book.title, "</h2>\n    <p>By ").concat(book.author, ", ").concat(book.year, "</p>\n  ");
    bookList.appendChild(bookDiv);
}
// Create some book objects
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
var book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
// Display the books on the webpage
displayBook(book1);
displayBook(book2);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1CQUFtQixrREFBa0Q7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wcm9qZWN0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyAtLS0gU3RhcnRlciBUeXBlU2NyaXB0IENvZGUgLS0tXG4vLyBBIHNpbXBsZSBCb29rIGNsYXNzXG52YXIgQm9vayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIHllYXIpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICB9XG4gICAgcmV0dXJuIEJvb2s7XG59KCkpO1xudmFyIHJldmlld3MgPSBbXTtcbmZ1bmN0aW9uIGFkZFJldmlldyhib29rSWQsIHJhdGluZywgY29tbWVudCkge1xuICAgIHJldmlld3MucHVzaCh7IGJvb2tJZDogYm9va0lkLCByYXRpbmc6IHJhdGluZywgY29tbWVudDogY29tbWVudCB9KTtcbn1cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgYm9vayBpbmZvcm1hdGlvblxuZnVuY3Rpb24gZGlzcGxheUJvb2soYm9vaykge1xuICAgIHZhciBib29rTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vay1saXN0XCIpO1xuICAgIGlmICghYm9va0xpc3QpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgYm9va0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9va0Rpdi5pbm5lckhUTUwgPSBcIlxcbiAgICA8aDI+XCIuY29uY2F0KGJvb2sudGl0bGUsIFwiPC9oMj5cXG4gICAgPHA+QnkgXCIpLmNvbmNhdChib29rLmF1dGhvciwgXCIsIFwiKS5jb25jYXQoYm9vay55ZWFyLCBcIjwvcD5cXG4gIFwiKTtcbiAgICBib29rTGlzdC5hcHBlbmRDaGlsZChib29rRGl2KTtcbn1cbi8vIENyZWF0ZSBzb21lIGJvb2sgb2JqZWN0c1xudmFyIGJvb2sxID0gbmV3IEJvb2soXCJUaGUgSG9iYml0XCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTkzNyk7XG52YXIgYm9vazIgPSBuZXcgQm9vayhcIlRoZSBMb3JkIG9mIHRoZSBSaW5nc1wiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5NTQpO1xuLy8gRGlzcGxheSB0aGUgYm9va3Mgb24gdGhlIHdlYnBhZ2VcbmRpc3BsYXlCb29rKGJvb2sxKTtcbmRpc3BsYXlCb29rKGJvb2syKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==