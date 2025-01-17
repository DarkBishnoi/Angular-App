import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Admin';
    // Method to check if the user is logged in
    constructor() {
      // Log the value of 'isLoggedIn' from localStorage
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      console.log('isLoggedIn:', isLoggedIn); // Prints the value of isLoggedIn to the console
  
      // Optionally, check if the user is logged in
      if (isLoggedIn === 'true') {
        console.log('User is logged in');
      } else {
        console.log('User is not logged in');
      }
    }
    isAuthenticated(): boolean {
      // Check if the user is logged in via localStorage or any other method
      return localStorage.getItem('isLoggedIn') === 'true';
      
    }
    
}
