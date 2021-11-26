import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-see-book',
  templateUrl: './see-book.component.html',
  styleUrls: ['./see-book.component.css']
})
export class SeeBookComponent implements OnInit {

  id: string;
  book: Book | undefined;
  constructor(private aRoute: ActivatedRoute,
              private _bookService: BookService) {
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
   }
  ngOnInit(): void {
    this.getBook();
  }
  getBook() {
    this._bookService.getBook(this.id).subscribe(data => {
      this.book = data;
    }, error => {
      console.log(error);
    })
  }

}
