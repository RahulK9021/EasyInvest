import { Routes } from '@angular/router';
import { FoundersComponent } from './maindashboard/navbar/founders/founders.component';
import { InvestorComponent } from './maindashboard/navbar/investor/investor.component';
import { LoginComponent } from './maindashboard/navbar/login/login.component';
import { PortfolioComponent } from './maindashboard/navbar/portfolio/portfolio.component';
import { PredicationsComponent } from './maindashboard/navbar/predications/predications.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { maindashboard } from './maindashboard/maindashboard.component';
import { HomeComponent } from './maindashboard/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // default dashboard page
  { path: 'founders', component: FoundersComponent },
  { path: 'investor', component: InvestorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'predications', component: PredicationsComponent },
  {path : 'about-us' , component : AboutUsComponent},
  {path: '**', redirectTo: '' } // fallback
];
