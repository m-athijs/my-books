import {computedFrom, bindable} from 'aurelia-framework';

export class BookStats {

  @bindable books;
  @bindable originalNumberOfBooks;

  @computedFrom('orignalNumberOfBooks', 'books.length')
  get addedBooks() {
    return this.books.length - this.originalNumberOfBooks;
  }

}
