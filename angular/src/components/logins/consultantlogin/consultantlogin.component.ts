import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientserviceService } from '../../../services/clientservice.service';

@Component({
  selector: 'app-consultantlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consultantlogin.component.html',
  styleUrl: './consultantlogin.component.css'
})
export class ConsultantloginComponent {
  restData:ClientserviceService;


  constructor(restDataref:ClientserviceService,private router:Router) {
    this.restData=restDataref;
  }

}
