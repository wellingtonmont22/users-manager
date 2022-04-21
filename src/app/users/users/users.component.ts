import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[] = [
    {
      id: 1,
      email: 'well@mail.com'
    },
    {
      id: 5,
      email: 'x@mail.com'
    }
  ];
  displayedColumns = ['id', 'email'];

  constructor() { }

  ngOnInit(): void {
  }

}
