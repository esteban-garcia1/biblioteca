import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css'],
})
export class IniciarComponent {
  formIniciar: FormGroup;

  constructor(private router: Router, private userService: UserService) {
    this.formIniciar = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    this.userService
      .iniciar(this.formIniciar.value)
      .then((response) => {
        if (response != null && this.userService.iniciar != null) {
          alert('inicio de sesion exitoso');
          this.router.navigate(['/home']);
        } else {
          alert('error al iniciar sesion');
        }
      })
      .catch((error) => {
        alert('error al iniciar sesion');
      });
  }
  regresar() {
    this.router.navigate(['']);
  }

  registrarme() {
    this.router.navigate(['/login']);
  }
}
