import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Imovie } from './Imovie';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieinfoService {
  private _url: string = "/assets/data/movie.json";
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Imovie[]> {
    return this.http.get<Imovie[]>(this._url)
      .pipe(tap(data => alert(JSON.stringify(data))), catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "Server Error");
  }
}
