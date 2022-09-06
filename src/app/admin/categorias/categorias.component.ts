import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QueryService } from 'src/app/services/query.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: any = null;
  categoriaForm: FormGroup;
  open = false;
  btn2 = 'Guardar';
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private query: QueryService,
    private spinner: NgxSpinnerService
  ) { 
    this.categoriaForm = this.fb.group({
      id: [0],
      name: [null, [Validators.required]],
      parent_category_id: [null]
    });
  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }
  
  initForm(id:any,name:any,parentId:any) {
    this.categoriaForm = this.fb.group({
      id: [id],
      name: [name, [Validators.required]],
      parent_category_id: [parentId]
    });
  }

  async guardar() {
    if (this.categoriaForm.invalid) {
      this.toastr.warning('Ingrese la categoría');
      return;
    }
    this.spinner.show();
    if (this.categoriaForm.value.id == 0) {
      console.log('Guardando!');
      const res: any = await this.query.guardarCategoria(this.categoriaForm.value);
    }
    if (this.categoriaForm.value.id > 0) {
      console.log('Actualizando!');  
      console.log(this.categoriaForm.value);      
      const res: any = await this.query.editarCategoria(this.categoriaForm.value.id,this.categoriaForm.value);
    }
    this.btn2 = "Guardar";
    this.spinner.hide();
    this.obtenerCategorias();
    this.initForm(null,null,null);
  }

  async eliminar(id: any) {
    this.spinner.show();
    const res: any = await this.query.eliminarCategoria(id);
    this.spinner.hide();
  }

  async editarShow(categoria:any) {
    this.initForm(categoria.id,categoria.name, categoria.parent_category_id);
    this.btn2 = 'Actualizar';
  }

  async obtenerCategorias() {
    this.spinner.show();
    const res: any = await this.query.obtenerCategorias({});;
    console.log(res);
    this.categorias = res.data;
    this.spinner.hide();
  }

  refreshForm() {
    this.initForm(null,null,null);
    this.btn2 = "Guardar";
  }

}
