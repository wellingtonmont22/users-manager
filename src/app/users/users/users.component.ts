import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { User } from '../model/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  displayedColumns = ['id', 'email'];

  constructor(private usersService: UsersService, public dialog: MatDialog) {
    this.users$ = this.usersService.getAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os cursos');
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
