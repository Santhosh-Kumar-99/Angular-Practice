import { BooksService } from './books.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../typeInterfaces/Book';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  books: Book[] = []

  cart: Book[] = []

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  istoogle: boolean = true;

  inputValue: string = ''

  // ngOnInit(): void {
  //   console.log('onInit');

  //   /* similar to useEffects but ngOnInit is called after the constructor
  //    which is called after the component class is instaniated 
  //    can be used for api calls and side effects
  //    console.log('Component is ready to be mounted') */
  // }

}
