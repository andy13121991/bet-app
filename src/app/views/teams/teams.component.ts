import { Component } from '@angular/core';

// Import teamsData from the specified JSON file
import teamsData from '../../../assets/json/teams.json';

// Define the structure of a Team using an interface
interface Team {
  id: number,
  name: string,
  logo: string,
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  // Declare an array of teams and initialize it with the data from teams.json
  teams: Team[] = teamsData;
}
