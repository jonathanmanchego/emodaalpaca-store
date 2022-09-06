import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  userForm: FormGroup;
  btn2 = 'Guardar';
  isSave = true;
  users: any = [];
  constructor(
    private fb: FormBuilder,
    private query: QueryService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    this.userForm = this.fb.group({
      id: [null],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      password2: [null, [Validators.required]],
    });
  }

  async ngOnInit(): Promise<void> {
    this.spinner.show();
    await this.initialData();
    this.spinner.hide();
  }

  async initialData() {
    const res: any = await this.query.getUsers({});
    this.users = res.data;
  }

  async guardar() {
    console.log('guardando!');
    if (this.userForm.invalid) {
      this.toastr.warning('Llene todos los campos');
      return;
    }
    if (this.userForm.valid && this.userForm.value.password && this.userForm.value.password2) {
      if (this.userForm.value.password == this.userForm.value.password2) {
        this.spinner.show();
        const data = this.userForm.value;
        delete data.password2;
        await this.query.saveUser(data);
        await this.initialData();
        this.spinner.hide();
        this.refreshForm();
      } else {
        this.toastr.warning('No coinciden las contraseñas');
      }
    }
  } 

  async editar() {
    console.log('editando');
    var edit = true;
    console.log(this.userForm.value);
    
    if (this.userForm.invalid) {
      this.toastr.warning('Llene todos los campos');
      return;
    }
    if (this.userForm.valid) {
      if (this.userForm.value.password || this.userForm.value.password2) {
        if (this.userForm.value.password != this.userForm.value.password2) {
          this.toastr.warning('No coinciden las contraseñas');
          edit = false;
        } 
      }
      if (edit) {
          this.spinner.show();
          const data = this.userForm.value;
          delete data.password2;
          await this.query.updateUser(data.id, data);
          await this.initialData();
          this.spinner.hide();
          this.refreshForm();
      }
    }
  }

  async eliminar(id: number) {
    this.spinner.show();
    await this.query.deleteUser(id);
    await this.initialData(); 
    this.spinner.hide();
  }

  showEdit(user: any) {
    this.isSave = false;
    this.btn2 = 'Actualizar';
    this.userForm = this.fb.group({
      id: [user.id],
      firstName: [user.firstName, [Validators.required]],
      lastName: [user.lastName, [Validators.required]],
      email: [user.email, [Validators.required]],
      password: null,
      password2: null,
    });
  }

  refreshForm() {
    this.btn2 = 'Guardar';
    this.isSave = true;
    this.userForm = this.fb.group({
      id: [null],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      password2: [null, [Validators.required]],
    });
  }


}
