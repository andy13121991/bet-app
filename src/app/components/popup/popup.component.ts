import { Component, inject } from '@angular/core';
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule],
})
export class PopupComponent {

  // Inject the MatSnackBarRef for managing the Snackbar
  snackBarRef = inject(MatSnackBarRef);
}
