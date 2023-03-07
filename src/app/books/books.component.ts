import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name0: string = 'Clean Code'
  author0: string = 'Robert C Martin'
  booksImageUrl0: string = 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg'

  name1: string = 'Pragmatic Programmer'
  author1: string = 'Andrew Hunt and David Thomas'
  bookImageUrl1: string = 'https://m.media-amazon.com/images/I/41HXiIojloL._SX258_BO1,204,203,200_.jpg'

  isDisabled: boolean = false;

  handleClick(): void {
    this.isDisabled = true
  }
}
