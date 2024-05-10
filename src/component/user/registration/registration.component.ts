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
      userName: ['', Validators.required],
      userGroup: ['',Validators.required],
      mobileNumber:['',Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
    *  This will submit the registration form
    */
  save() {
    const payLoad = this.registrationForm.value;
    const emailId = payLoad.emailId;
    this._userService.registerUser(payLoad).subscribe({
      next: (response: any) =>{
        if(response) {
          console.log('User is successfully registered!');
          this._router.navigate(['/signin']);
        }
        console.log('User is already registered with this Id ', emailId, ',please try with different Id');
      },
      error: (err: any) => {
        console.log('User is not registered, please try again!');
      }
    })
  }
}
