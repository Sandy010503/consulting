import { Component } from '@angular/core';
import { ClientserviceService } from '../../services/clientservice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [NgFor],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  restData:ClientserviceService;
  userdata: any;
  
    constructor(restDataref:ClientserviceService)
    {
      this.restData=restDataref;
    }

}
