import { Routes } from '@angular/router';



import { CreateUserComponent } from './create-user/create-user.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'create-user', component: CreateUserComponent },
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: '' },
];
