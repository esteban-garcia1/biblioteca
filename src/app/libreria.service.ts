import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { biblioteca } from './biblioteca';
import { DataServices } from './data.services';

@Injectable({ providedIn: 'root' })
export class LibreriaService {
  libros: biblioteca[] = [];
  searchTitle: string = '';
  copiasDisponibles: number;
  myForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder, private dataservices: DataServices) {
    this.libros = this.motrarLibro();
  }

  searchByTitle(titulo: string): any[] {
    titulo = titulo.toLowerCase();
    this.libros.filter((biblioteca) =>
      biblioteca.titulo.toLowerCase().includes(titulo)
    );
    

    return this.libros.filter((biblioteca) =>
      biblioteca.titulo.toLowerCase().includes(titulo)
    );
  }
  prestarLibro(libro:biblioteca,index:number) {
    if (libro.copiasDisponibles > 0) {
      libro.copiasDisponibles = libro.copiasDisponibles-1;
      console.log(libro);
      
      this.libros[index] = libro;
      console.log(this.libros);
      sessionStorage.setItem('libros', JSON.stringify(this.libros));
      
    }else{
      alert('No hay copias disponibles');
    }
  }

  borrarLibros() {
    sessionStorage.removeItem('libros');
    this.libros = [];
  }
  guardarLibro(libro: any) {
    this.libros.push(libro);
    //sessionStorage.setItem('libros', JSON.stringify(this.libros));
    this.dataservices.guardarLibros(this.libros);
  }
  motrarLibro() :any[]{
    const libroString = sessionStorage.getItem('libros');
    return libroString != null ? JSON.parse(libroString) : [];
     
  }
  obtenerLibros(){
    return this.dataservices.cargarLibros();
  }
  setLibros(bibliotecas:biblioteca[]){
    this.libros = bibliotecas;

  }
}
