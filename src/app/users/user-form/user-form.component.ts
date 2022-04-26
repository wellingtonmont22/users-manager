import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  hide: boolean = true;

  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/'
    ),
  ]);

  constructor() {}

  ngOnInit(): void {}
}
