import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ListBookComponent } from './components/list-book/list-book.component';
import { SeeBookComponent } from './components/see-book/see-book.component';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEditBookComponent,
    ListBookComponent,
    NavbarComponent,
    SeeBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
