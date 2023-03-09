import { Book } from '../typeInterfaces/Book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = [];

  constructor() { }

  addToCart(book: Book): void {
    this.cart.push(book);
  }

  removeFromCart(book: Book): void {
    this.cart.map((ele, index) => {
      if (ele.id === book.id) {
        this.cart.splice(index, 1);
      }
    })
  }
  get(): Book[] {
    return this.cart
  }
}
