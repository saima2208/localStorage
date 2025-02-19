import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'localStorage';
}

export class User{
  name: string;
  age: number;
  address: string;
  email: string;

  constructor(name:string, age: number, address:string,email:string){
  this.name= name;
  this.age = age ;
  this.address = address ;
  this.email =  email ;
}
}

