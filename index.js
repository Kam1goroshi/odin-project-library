/**
 * Holds info about a book
 */
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages; //number of pages
        this.isRead = isRead;
    }
}

/**
 * @returns string: [title] by [author], [pages] pages, {not read yet, read}
 */
Book.prototype.getInfo = function () {
    return this.title + " by " + this.author + ", " + this.pages + (this.isRead ? ' read' : ' not read yet');
};