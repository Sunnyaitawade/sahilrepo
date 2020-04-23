import { Injectable } from '@angular/core';
 
 
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Brand } from '../model/brand';
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  const apiUrl = "http://localhost:8090/api/master";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  getBrands(): Observable<Brand[]> {
    const url = `${apiUrl}/brands`;
    return this.http.get<Brand[]>(url)
      .pipe(
        tap(brand => console.log('fetched Brand')),
        catchError(this.handleError('getBrands', []))
      );
  }
  
  getBrand(id: number): Observable<Brand> {
    const url = `${apiUrl}/brands/${id}`;
    return this.http.get<Brand>(url).pipe(
      tap(_ => console.log(`fetched Brand id=${id}`)),
      catchError(this.handleError<Brand>(`geBrand id=${id}`))
    );
  }
  
  addBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(apiUrl, brand, httpOptions).pipe(
      tap((brand: Brand) => console.log(`added Brand w/ id=${brand.id}`)),
      catchError(this.handleError<Brand>('addBrand'))
    );
  }
  
  updateBrand(id: any, brand: Brand): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, brand, httpOptions).pipe(
      tap(_ => console.log(`updated Brand id=${id}`)),
      catchError(this.handleError<any>('updateBrand'))
    );
  }
  
  deleteBrand(id: any): Observable<Brand> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Brand>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Brand id=${id}`)),
      catchError(this.handleError<Brand>('deleteBrand'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
