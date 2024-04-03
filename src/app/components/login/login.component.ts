import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }

  login(): void {
    if (this.username === 'username' && this.password === 'password') {
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    }
    else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
