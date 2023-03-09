import { Book } from './../typeInterfaces/Book';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartservice: CartService) { }

  ngOnInit(): void { }

  getCart(): Book[] {
    return this.cartservice.get();
  }

}
