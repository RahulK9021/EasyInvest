import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-maindashboard',
  imports: [RouterOutlet, NavbarComponent, HomeComponent],
  standalone: true,
  templateUrl: './maindashboard.component.html',
  styleUrl: './maindashboard.component.css'
})
export class maindashboard{

}