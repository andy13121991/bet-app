import { Injectable, Output, EventEmitter } from '@angular/core';
import { eventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  @Output() newDatasHaveArrived: EventEmitter<any> = new EventEmitter()

  constructor(private events: eventsService) { }

}
