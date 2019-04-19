import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiJson}${path}`, { params });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiJson}${path}`,
      JSON.stringify(body)
    ).pipe(catchError((err: HttpErrorResponse) => {
      return throwError(err);
    }));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiJson}${path}`,
      JSON.stringify(body)
    ).pipe(catchError((err: HttpErrorResponse) => {
      return throwError(err);
    })
  );
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(
      `${environment.apiJson}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiJson}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}