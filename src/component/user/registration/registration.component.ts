import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      user_name: ['', Validators.required],
      userGroup: ['',Validators.required],
      mobile_number:['',Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  save() {
    const payLoad = this.registrationForm.value;
    this._userService.registerUser(payLoad).subscribe({
      next: (response) =>{
        console.log('User is successfully registered!');
        this._router.navigate(['/signin']);
      },
      error: (err) => {
        console.log('User is not registered, please try again!');
      }
    })
  }
}
