import { Routes } from '@angular/router';



import { CreateUserComponent } from './create-user/create-user.component';
import { ListComponent } from './list/list.component';


export const routes: Routes = [
 
  { path: 'create-user', component: CreateUserComponent },
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: '' },
];
