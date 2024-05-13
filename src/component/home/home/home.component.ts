import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/component/user/login/login/login.component';
import { RegistrationComponent } from 'src/component/user/registration/registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  activeButton!: string;
  
  constructor(
    private router: Router,
    public matDialog: MatDialog
  ) {}
  
  ngOnInit() {
    
  }
  
  /**
   * Open to login component
   */
  Login(button: string) {
    this.activeButton = button;
    const dialogRef = this.matDialog.open(LoginComponent, {
      width: '600px',
      disableClose: true
    })
    // this.router.navigate(['signin']);
  }
  
  /**
   * Open registration compoent
   */
  SignUp(button: string) {
    this.activeButton = button;
    const dialogRef= this.matDialog.open(RegistrationComponent, {
      width: '800px',
      disableClose: true
    })
    // this.router.navigate(['register']);
  }
  
  /**
   * Redirect to home route
   */
  Home(button: string) {
    this.activeButton = button;
    this.router.navigate(['']);
  }
  
  
}
