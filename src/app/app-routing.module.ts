import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AddEditFormComponent } from './components/add-edit-form/add-edit-form.component';


const routes: Routes = [
  {
    path:'add', component: AddEditFormComponent
  },{
    path:'edit/:id', component: AddEditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
