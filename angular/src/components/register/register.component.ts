import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from '../../app/app.routes';
import { ClientserviceService } from '../../services/clientservice.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  phoneno: string = '';
  role: string = '';

  // constructor(private router: Router) {}
  restData:ClientserviceService;


  constructor(restDataref:ClientserviceService,private router:Router) {
    this.restData=restDataref;
  }

  redirecttologin(){
    this.router.navigateByUrl("mainlogin");
  }
  

  validateForm() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // If everything is valid, redirect to the login page
    this.router.navigate(['/login']);
    return false; // Prevent default form submission
  }

}
