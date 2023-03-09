import { Book } from './../typeInterfaces/Book';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(): Book[] {  
    return [
      {
        id:1,
        name: 'Clean Code',
        author: 'Robert C Martin',
        bookImageUrl: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        price: 800
      }, {
        id:2,
        name: 'Pragmatic Programmer',
        author: 'Andrew Hunt and David Thomas',
        bookImageUrl: 'https://m.media-amazon.com/images/I/41HXiIojloL._SX258_BO1,204,203,200_.jpg',
        price: 700
      }, {
        id:3,
        name: 'The Self-Taught Programmer',
        author: 'Cory Althoff',
        bookImageUrl: 'https://m.media-amazon.com/images/I/41zgZxB2SML._SY344_BO1,204,203,200_.jpg',
        price: 900
      }
    ]
  }
}
