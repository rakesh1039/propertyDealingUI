import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/service/shared.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm! : FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _sharedService: SharedService
  ) {}
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: ['',[Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  
  /**
   * It is used for login persona.
   */
  login() {
    const payLoad = this.loginForm.value;
    this._userService.userLogin(payLoad).subscribe({
      next: (response: any) => {
        const message = response.message
        if(message === 'User does not exist') {
          console.log('User is not registered, please register first!');
        } else if(message === 'Password does not match') {
          console.log('Please enter a valid password!');
        } else {
          this._sharedService.openSuccessSnackBar('Successfully logged in','');
          console.log('Logged in successfull!');
        }
        console.log('Response is: ', response);
      },
      error: (err: any) => {
        console.log('Login failed, please try again!');
      }
    })
  }
}
