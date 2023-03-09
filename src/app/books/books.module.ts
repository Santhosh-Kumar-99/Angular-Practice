import { BookComponent } from './book/book.component';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [CommonModule],
  providers: [BooksService],
  exports: [BooksComponent]
})
export class BooksModule { }
