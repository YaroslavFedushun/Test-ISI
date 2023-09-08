import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] =  [{
    username: 'mperry1993',
    first_name: 'Matthew',
    last_name: 'Perry',
    email: 'matthew@mail.com',
    password: 'string',
    user_type: 'Administrator'
  },
  {
    username: 'mperry1994',
    first_name: 'Matthew',
    last_name: 'Perry',
    email: 'matthew@mail.com',
    password: 'string',
    user_type: 'Administrator'
  },
  {
    username: 'mperry1995',
    first_name: 'Matthew',
    last_name: 'Perry',
    email: 'matthew@mail.com',
    password: 'string',
    user_type: 'Administrator'
  },{
    username: 'mperry1996',
    first_name: 'Matthew',
    last_name: 'Perry',
    email: 'matthew@mail.com',
    password: 'string',
    user_type: 'Administrator'
  },{
    username: 'mperry1997',
    first_name: 'Matthew',
    last_name: 'Perry',
    email: 'matthew@mail.com',
    password: 'string',
    user_type: 'Administrator'
  },{
    username: 'mperry1998',
    first_name: 'Matthew',
    last_name: 'Perry',
    email: 'matthew@mail.com',
    password: 'string',
    user_type: 'Administrator'
  },{
    username: 'mperry1992',
    first_name: 'Matthew',
    last_name: 'Perry',
    email: 'matthew@mail.com',
    password: 'string',
    user_type: 'Administrator'
  },{
    username: 'mperry1999',
    first_name: 'Matthew',
    last_name: 'Perry',
    email: 'matthew@mail.com',
    password: 'string',
    user_type: 'Administrator'
  },
    ]

  userSource = of(this.users);


  getUsers(): Observable<User[]> { 
    return this.userSource;
  }

  getUserByUserName(userName: string): User | undefined {
    return this.users.find(el => el.username === userName);
  }

  create(user: User) {
    delete user.confirmPassword;
    this.users.push(user);
    this.userSource = of(this.users);
    alert('Well done');
    }

  update(user: User, id: string) {
    const index =  this.users.findIndex(user => user.username === id);
    this.users[index] = user;
    this.userSource = of(this.users);
    console.log(this.userSource);
  
    alert('Updated');

  }


  delete(id:string) {
    const index =  this.users.findIndex(user => user.username === id);
    delete this.users[index];
  }

  userNameAvailable(userName: string) {
    return this.users.find(el => el.username === userName);
  }
}
