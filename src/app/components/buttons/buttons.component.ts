import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PopupComponent } from '../popup/popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule, MatDialogModule],
})
export class ButtonsComponent {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) { }

  //popup showing after click
  openSnackBar() {
    this._snackBar.openFromComponent(PopupComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
