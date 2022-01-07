import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  // @ts-ignore
  book: Book = {}
  // @ts-ignore
  status: string = "Please fill information of books";
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.bookService.createBook(this.book).subscribe(data =>{
      console.log(data)
      this.status = "Create successful"
    })
  }

  back() {
    this.router.navigate([''])
  }

}
