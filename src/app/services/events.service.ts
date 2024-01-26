import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Root2 } from '../types';

@Injectable({
  providedIn: 'root'
})

export class eventsService {

  matches: Root2[] = [];

  private URL = 'http://demo7719890.mockable.io/events';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Root2[]>(this.URL).subscribe((rest: Root2[]) => {
      this.matches = rest;
    });
  }
}
