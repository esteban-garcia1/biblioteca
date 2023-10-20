import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formReg: FormGroup;

  constructor(private router: Router, private userService: UserService) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  ngOnInit(): void {}

  // onSubmit(){
  //   this.userService.register(this.formReg.value)
  //   .then(response => {console.log(response)})
  //   .catch(error=>console.log(error));
  // this.router.navigate(['/registrar']);
  //  }
  onSubmit() {
    this.userService
      .register(this.formReg.value)
      .then((response) => {
        if (response != null && this.userService.register != null) {
          alert(' Registro de usuario exitoso');
          this.router.navigate(['']);
        } else {
          alert('error al registrar usuario');
        }
      })
      .catch((error) => {
        alert('error al registrar usuario');
      });
  }
  regresar() {
    this.router.navigate(['']);
  }
}
