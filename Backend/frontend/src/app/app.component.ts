import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { maindashboard } from './maindashboard/maindashboard.component';
import { NavbarComponent } from "./maindashboard/navbar/navbar.component";
import { PortfolioComponent } from './maindashboard/navbar/portfolio/portfolio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, maindashboard, NavbarComponent , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InvestKaro';
}
