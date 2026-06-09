import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  selectedRole: 'investor' | 'founder' = 'investor';

  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
     password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
        ],
      ]
  });

  selectRole(role: 'investor' | 'founder') {
    this.selectedRole = role;
  }

  onLogin() {
    if (this.loginForm.valid) {

      console.log({
        ...this.loginForm.value,
        role: this.selectedRole
      });

      if (this.selectedRole === 'investor') {
        console.log('Investor login');
        // TODO: Navigate to Investor Dashboard
      } else {
        console.log('Founder login');
        // TODO: Navigate to Founder Dashboard
      }
    }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
