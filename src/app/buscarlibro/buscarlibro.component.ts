import { Component, Injectable, OnInit } from '@angular/core';
import { LibreriaService } from '../libreria.service';
import { biblioteca } from '../biblioteca';
import { DataServices } from '../data.services';
import { Router } from '@angular/router';
@Injectable()
@Component({
  selector: 'app-buscarlibro',
  templateUrl: './buscarlibro.component.html',
  styleUrls: ['./buscarlibro.component.css'],
})
export class BuscarlibroComponent implements OnInit {
  searchTitle: string = '';
  bibliotecas: biblioteca[] = [];
  libro: biblioteca;
  libroMostrado: string = '';
  constructor(
    private libreriaService: LibreriaService,
    private dataservices: DataServices,
    private router: Router
  ) {
    this.libro = new biblioteca('', '', 0);
  }

  prestarLibro(libro: biblioteca, index: number) {
    console.log(index);

    this.libreriaService.prestarLibro(libro, index);
  }

  searchByTitle() {
    this.bibliotecas = this.libreriaService.searchByTitle(this.libroMostrado);
  }

  borrarLibros() {
    sessionStorage.removeItem('libros');
    this.bibliotecas = [];
  }

  ngOnInit() {
    this.dataservices.cargarLibros().subscribe(
      (bibliotecas) => {
        this.dataservices.cargarLibros();
        this.bibliotecas = bibliotecas;
        this.libreriaService.setLibros(this.bibliotecas);
      },
      (error) => {
        console.log('Error al cargar libro:' + error);
      }
    );
  }
  regresar() {
    this.router.navigate(['/home']);
  }
}
