import { CartService } from '../../cart/cart.service';
import { Book } from '../../typeInterfaces/Book';
import { Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private cartservice: CartService) { }

  @Input() book: Book = {} as Book;

  isInCart: boolean = false;

  addToCart() {
    this.cartservice.addToCart(this.book);
    this.isInCart = true;
    //this.bookEmitter.emit(this.book);
  }

  removeFromCart() {
    this.cartservice.removeFromCart(this.book);
    this.isInCart = false;
  }



}
