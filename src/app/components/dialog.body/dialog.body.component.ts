import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatchDetailsComponent } from '../match-details/match-details.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { ScoresComponent } from '../scores/scores.component';


@Component({
  selector: 'app-dialog.body',
  templateUrl: './dialog.body.component.html',
  styleUrls: ['./dialog.body.component.css'],
  providers: [DatePipe],
  standalone: true,
  imports: [MatDialogModule, MatchDetailsComponent, ButtonsComponent, ScoresComponent]
})
export class DialogBodyComponent {

  // Initialize current date
  myDate: Date = new Date();

  // Variable to store current time
  CurrentTime: any;

  // Constructor with dependency injection for DatePipe and MatDialog
  constructor(public datepipe: DatePipe, private ref: MatDialog) {

    // Update current time every 1 millisecond
    setInterval(() => {
      // Format and update CurrentTime with hours, minutes, and seconds
      this.CurrentTime = ("0" + new Date().getHours()
        ).slice(-2) + ':' + ("0" + new Date().getMinutes()
        ).slice(-2) + ':' + ("0" + new Date().getSeconds()
        ).slice(-2)
    }, 1);
  }

  // Format the current date
  date = this.datepipe.transform(this.myDate, 'dd.MM.yyyy');

}

