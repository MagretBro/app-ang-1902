import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.scss']
})
export class LoginCompComponent implements OnInit {

  username = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Login: ${this.username}, Password: ${this.password}')
  }
}
