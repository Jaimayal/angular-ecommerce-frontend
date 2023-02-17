import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    const name = this.registerForm.get('name')?.value as string;
    const lastname = this.registerForm.get('lastname')?.value as string;
    const email = this.registerForm.get('email')?.value as string;
    const password = this.registerForm.get('password')?.value as string;

    this.authService.register({ name, lastname, email, password });
  }
}
