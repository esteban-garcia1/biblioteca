import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}


  cerrarSesion() {
    this.userService
      .logout()

      .then(() => {
        this.router.navigate(['']);
        alert('Sesión cerrada');
      })
      .catch((error) => console.log(error));
  }
}
