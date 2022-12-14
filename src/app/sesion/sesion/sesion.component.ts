import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent implements OnInit {
  
  consultando:boolean = false;
  signinForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private auth: AuthService,
  ) { 
    this.signinForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  async signin() {
    this.consultando = true;
    if (this.signinForm.invalid) {
      this.toastr.warning('Debe ingresar todos los datos', 'Error!');
      this.consultando = false;
      return;
    }
    // console.log(this.signinForm.value);
    this.auth.signin(this.signinForm.value);
    this.consultando = true;
    setTimeout(
       () => {
        this.consultando = false;
      },
      5000
    );
  }

}
