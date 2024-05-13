import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from 'src/service/shared.service';
import { UserService } from 'src/service/user.service';
import { LoginComponent } from '../login/login/login.component';

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
    private _router: Router,
    private _sharedService: SharedService,
    public dialogRef: MatDialog,
    private matDialog: MatDialogRef<RegistrationComponent>
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
          this._sharedService.openSuccessSnackBar('User is successfully registered!', ' ');
          this.matDialog.close();
          const dialogRef = this.dialogRef.open(LoginComponent, {
            width: '600px',
            disableClose: true
          })
          // this._router.navigate(['/signin']);
        } else {
          this._sharedService.openErrorSnackBar('User is already registered with this Id, please try with different Id!', ' ');
        }
      },
      error: (err: any) => {
        this._sharedService.openErrorSnackBar('User is not registered, please try again!', ' ');
      }
    })
  }
  
  /**
   * It will close the dialog box.
   */
  cancel() {
   this.matDialog.close(); 
  }
}
