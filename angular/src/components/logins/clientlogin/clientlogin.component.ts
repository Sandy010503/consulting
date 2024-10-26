import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { ClientserviceService } from '../../../services/clientservice.service';

@Component({
  selector: 'app-clientlogin',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './clientlogin.component.html',
  styleUrl: './clientlogin.component.css'
})
export class ClientloginComponent {
  restData:ClientserviceService;


  constructor(restDataref:ClientserviceService,private router:Router) {
    this.restData=restDataref;
  }
  

}
