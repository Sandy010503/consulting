import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private router:Router){}

  redirecttoadminpage(){
    this.router.navigateByUrl("admin");
  }

  onSubmit(form: any) {
    const { username, password } = form.value;

    if (username === 'admin' && password === 'admin123') {
      // Navigate to the admin page
      this.redirecttoadminpage();
    } else {
      // Handle invalid login
      alert('Invalid username or password');
    }
  }

}
