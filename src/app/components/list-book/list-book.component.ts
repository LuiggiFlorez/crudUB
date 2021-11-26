import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  listBooks: Book[] = [];

  constructor(private _bookService: BookService,
       private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this._bookService.getListBooks().subscribe(data => {
      this.listBooks = data;
    }, error => {
      this.toastr.error('Opss !','Error');
      console.log(error);
    })
  }

  deleteBook(Id: string) {
    console.log(Id);
    this._bookService.deleteBook(Id).subscribe(data => {
      this.getBooks();
      this.toastr.error('Success!','Register deleted');
    }, error => {
      this.toastr.error('Opss !','Error');
      console.log(error);
    })
  }


}
