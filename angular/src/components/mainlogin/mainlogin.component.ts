import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainlogin',
  standalone: true,
  imports: [],
  templateUrl: './mainlogin.component.html',
  styleUrl: './mainlogin.component.css'
})
export class MainloginComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
