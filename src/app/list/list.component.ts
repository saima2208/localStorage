import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  
   users: User[] = [];

   constructor(private router: Router) {}

   ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
   }
   editUser(user: User) {
    this.router.navigate(['/create-user'], { state: { user}});
   }
   deleteUser(user: User){
    if (confirm('Are you sure you want to delete this user?')){
      this.users = this.users.filter(u => u !==user);
      localStorage.setItem('users',JSON.stringify(this.users))
    }

   }
  }


