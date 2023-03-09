import { BooksModule } from './books/books.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './books/book/book.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [AppComponent, CartComponent],
    imports: [BrowserModule, FormsModule, BooksModule],
    bootstrap: [AppComponent]
})
export class AppModule { }