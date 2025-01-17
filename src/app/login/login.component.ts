import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'user' && this.password === 'password') {
      // Correct credentials, set the 'isLoggedIn' flag to 'true' in localStorage
      localStorage.setItem('isLoggedIn', 'true');  // Store the login state
      this.router.navigate(['/sidebar']);  // Navigate to the dashboard after login
    } 
    else {
      alert('Invalid credentials');
    
    }
  }
}
