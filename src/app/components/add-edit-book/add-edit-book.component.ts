import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {

  addBook: FormGroup;
  action = 'Add';
  id = '';
  book: Book | undefined;

  constructor(private fb: FormBuilder,
              private _bookService: BookService,
              private router: Router,
              private aRoute: ActivatedRoute,
              private toastr: ToastrService) {
    this.addBook = this.fb.group({
      Id: ['', Validators.required],
      Title: ['', Validators.required],
      Author: ['', Validators.required],
      NumberOfPages: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
   }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){

    if(this.id !== null) {
      this.action = 'Edit';
      this._bookService.getBook(this.id).subscribe(data => {
        this.book = data;
        this.addBook.patchValue({
          Title: data.Title,
          NumberOfPages: data.NumberOfPages,
          Author: data.Author,
        })
      }, error => {
        console.log(error);
      })
    }
  }

  AddEditBook() {

    if(this.book == undefined) {

      // Add a new Book
      const book: Book = {      
        Id: this.addBook.get('Id')?.value,
        Title: this.addBook.get('Title')?.value,
        Author: this.addBook.get('Author')?.value,
        NumberOfPages: this.addBook.get('NumberOfPages')?.value
        
      }
      this._bookService.saveBook(book).subscribe(data => {
        this.toastr.success('Success', 'Book registered');
        this.router.navigate(['/']);
      }, error => {
        this.toastr.error('Opss!','Error');
        console.log(error);
      })
    } else {

      // Edit a Book
      const book: Book = {
        Id: this.addBook.get('Id')?.value,
        Title: this.addBook.get('Title')?.value,
        Author: this.addBook.get('Author')?.value,
        NumberOfPages: this.addBook.get('NumberOfPages')?.value
      }
      this._bookService.updateBook(this.id, book).subscribe(data => {
        this.toastr.info('Success', 'Book updated');
        this.router.navigate(['/']);
      }, error => {
        this.toastr.error('Opss !','Error');
        console.log(error);
      })
    }
  }
}
