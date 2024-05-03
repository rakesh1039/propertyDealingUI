import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.confirmPasswordValidator.bind(this)]]
    });
  }

  confirmPasswordValidator(control: FormGroup) {
    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      return { passwordsDoNotMatch: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
