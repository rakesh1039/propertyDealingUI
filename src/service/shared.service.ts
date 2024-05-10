import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private snackBar: MatSnackBar
  ) { }
  
  openSuccessSnackBar(message: string, action: string, duration1 = 3000) {
    this.snackBar.open(message, action, {
      duration: duration1,
      panelClass: ['mat-toolbar', 'success-snackbar'],
    });
  }
  
  openErrorSnackBar(message: string, action: string, duration1 = 3000) {
    this.snackBar.open(message, action, {
      duration: duration1,
      panelClass: ['mat-toolbar', 'error-snackbar'],
    });
  }
}
