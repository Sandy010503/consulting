import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './clientlogin.component.html',
  styleUrl: './clientlogin.component.css'
})
export class ClientloginComponent {
  onSubmit() {
    // Handle login logic here
    console.log('Form submitted');
    alert('Submitted')
  }

}
