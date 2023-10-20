//import { Component } from '@angular/core';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibreriaService } from '../libreria.service';
import { biblioteca } from '../biblioteca';
import { DataServices } from '../data.services';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Injectable()
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  mostrar: boolean = false;
  bibliotecas: biblioteca[] = [];
  libro: biblioteca = new biblioteca('', '', 0);
  myForm: FormGroup = this.fb.group({});
  constructor(
    private fb: FormBuilder,
    private libreriaService: LibreriaService,
    private dataservices: DataServices,
    private userService: UserService,
    private router: Router
  ) {
    const mostrar = sessionStorage.getItem('libros');
    if (mostrar) {
      this.bibliotecas = JSON.parse(mostrar);
    }
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      titulo: ['', Validators.required],
      id: ['', Validators.required],
      copiasDisponibles: ['', Validators.required],
    });
    this.libros = this.libreriaService.motrarLibro();
  }
  libros: any = [];
  saveBook(): void {
    if (this.myForm.valid) {
      const Book = {
        titulo: this.myForm.controls['titulo'].value,

        id: this.myForm.controls['id'].value,

        copiasDisponibles: this.myForm.controls['copiasDisponibles'].value,
      };
      this.libreriaService.guardarLibro(Book);
      alert('Libro guardado con exito');

      this.myForm.reset();
    } else {
      alert('Debe llenar todos los campos');
    }
  }

  cerrarSesion() {
    this.userService
      .logout()

      .then(() => {
        this.router.navigate(['']);
        alert('Sesión cerrada');
      })
      .catch((error) => console.log(error));
  }
  regresar() {
    this.router.navigate(['/home']);
  }
}
