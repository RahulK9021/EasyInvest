import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  get token(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  get role(): string {
    if (!this.token) {
      return '';
    }

    try {
      const decoded: any = jwtDecode(this.token);
      return decoded.role ?? '';
    } catch {
      return '';
    }
  }

  get dashboardRoute(): string {
    switch (this.role) {
      case 'INVESTOR':
        return '/investor/dashboard';
      case 'FOUNDER':
        return '/founder/dashboard';
      case 'ADMIN':
        return '/admin/dashboard';
      default:
        return '/login';
    }
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }

    this.router.navigate(['/login']);
  }

}
