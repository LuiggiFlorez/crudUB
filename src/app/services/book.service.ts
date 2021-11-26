import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private myAppUrl = 'https://localhost:44387/';
  private myApiUrl = 'api/Book/'

  constructor(private http: HttpClient) { }

  getListBooks(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveBook(book: Book): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, book);
  }

  getBook(id: string): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }

  updateBook(id: string, book: Book): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, book);
  }

}
