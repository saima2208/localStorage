import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../app.component';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{
  u:User = new User('',0,'','');
  ngOnInit(): void {
    console.log('create-userComponent')
    localStorage.setItem('name','John');
    localStorage.setItem('age','22');
    localStorage.setItem('address','Dhaka');
    localStorage.setItem('email','saima@gmail.com');
    
  }

  onSubmit(){
    let users = JSON.parse(localStorage.getItem('users')|| '[]');
    users.push(this.u);
    localStorage.setItem('users',JSON.stringify(users));
    this.u = new User('',0,'','');
    alert('User added successfully');
  }

}
