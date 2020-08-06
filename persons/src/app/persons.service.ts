import { Injectable } from '@angular/core';
// this
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  url: string = 'http://localhost:8080/persons';

  // links to this
  constructor(private http: HttpClient) {}

  getAll() {
    // return 'observable'
    // pipe pt ca struct de date sunt considerate 'streamuri'
    return this.http.get(this.url).pipe(
      // maps the info from the server to local info
      map((result) => {
        return (result as any).persons;
      })
    );
  }

  addOne(requestBody) {
    return this.http.post(this.url, requestBody).pipe(
      map((result) => {
        return result as any;
      })
    );
  }
}
