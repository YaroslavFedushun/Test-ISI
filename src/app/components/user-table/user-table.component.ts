import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  users: User[] = [];
  constructor(private userServices: UserService,
    private router: Router
  ) { }


  ngOnInit() {
    this.userServices.getUsers().subscribe(users =>
      this.users = users
    )
  }


}