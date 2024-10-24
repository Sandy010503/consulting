import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../components/home/home.component";
import { ClientComponent } from "../components/client/client.component";
import { MainpageComponent } from "../components/mainpage/mainpage.component";
import { ClientloginComponent } from "../components/logins/clientlogin/clientlogin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ClientComponent, MainpageComponent, ClientloginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consult';
}
