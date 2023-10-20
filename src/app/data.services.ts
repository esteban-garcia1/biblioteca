import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { biblioteca } from './biblioteca';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  guardarLibros(libros: biblioteca[]) {
    this.httpClient
      .put(
        'https://biblioteca-29885-default-rtdb.firebaseio.com/datos.json',
        libros
      )
      .subscribe(
        (response) => {
          console.log('resultado de guardar libros:' + response);
        }
        // error=>console.log("Error al guardar libro:"+ error)
      );
  }
  cargarLibros(): Observable<biblioteca[]> {
    return this.httpClient
      .get<biblioteca[]>(
        'https://biblioteca-29885-default-rtdb.firebaseio.com/datos.json'
      )
      .pipe(
        catchError((error) => {
          console.error('Error al cargar libros:', error);

          return throwError(error);
        })
      );
  }
}
