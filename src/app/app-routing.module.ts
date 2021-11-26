import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './components/list-book/list-book.component';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';
import { SeeBookComponent } from './components/see-book/see-book.component';


const routes: Routes = [
  { path: '', component: ListBookComponent },
  { path: 'add', component: AddEditBookComponent },
  { path: 'edit/:id', component: AddEditBookComponent },
  { path: 'see/:id', component: SeeBookComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
