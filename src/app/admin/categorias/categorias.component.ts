import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QueryService } from 'src/app/services/query.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  back = environment.back;
  categorias: any = null;
  categoriaForm: FormGroup;
  open = false;
  btn2 = 'Guardar';
  showUploadImg = true;
  public filesToUpload: Array<File>=[];
  public files: any = [];
  public filesView: any = [];

  constructor(
    private sanitizer: DomSanitizer,
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

  async ngOnInit(): Promise<void> {
    this.spinner.show();
    await this.obtenerCategorias();
    this.spinner.hide();
  }

  initForm(id:any,name:any,parentId:any) {
    this.categoriaForm = this.fb.group({
      id: [id],
      name: [name, [Validators.required]],
      parent_category_id: [parentId]
    });
    this.files = [];
    this.filesView = [];
    this.filesToUpload = [];
  }

  async guardar() {
    if (this.categoriaForm.invalid) {
      this.toastr.warning('Ingrese la categoría');
      this.categoriaForm.markAsDirty();
      return;
    }
    this.spinner.show();
    if (this.categoriaForm.value.id == 0) {
      if (this.files.length > 0) {
        console.log('Guardando!');
        console.log(this.categoriaForm.value);
        const data = JSON.stringify(this.categoriaForm.value);
        console.log('data',data);

        const formData: FormData = new FormData();
        formData.append('data', data);
        for (let i = 0; i < this.files.length; i++) {
          formData.append('file[]', this.files[i]);
        }
        formData.get('data')
        formData.get('file[]')
        const res: any = await this.query.guardarCategoria(formData);
        console.log(res);
      } else {
        this.toastr.warning('Debe cargar una imagen');
      }
    }
    if (this.categoriaForm.value.id > 0) {
      console.log('Actualizando!');
      console.log(this.categoriaForm.value);
      const data = JSON.stringify(this.categoriaForm.value);
      const formData: FormData = new FormData();
      formData.append('data', data);
      for (let i = 0; i < this.files.length; i++) {
        formData.append('file[]', this.files[i]);
      }
      const res: any = await this.query.editarCategoria(this.categoriaForm.value.id, formData);
      console.log(res);
    }
    this.btn2 = "Guardar";
    await this.obtenerCategorias();
    this.spinner.hide();
    this.initForm(0,null,null);
  }

  async eliminar(id: any) {
    this.spinner.show();
    const res: any = await this.query.eliminarCategoria(id);
    await this.obtenerCategorias();
    this.spinner.hide();
  }

  async editarShow(categoria:any) {
    this.initForm(categoria.id,categoria.name, categoria.parent_category_id);
    this.btn2 = 'Actualizar';
    if (categoria.urlImg) {
      this.filesView.push(this.back + '/' + categoria.urlImg);
      this.showUploadImg = false;
    }else{ this.showUploadImg = true; }
  }

  async obtenerCategorias() {
    this.spinner.show();
    const res: any = await this.query.obtenerCategorias({});;
    console.log(res);
    this.categorias = res.data;
    this.spinner.hide();
  }

  refreshForm() {
    this.initForm(0,null,null);
    this.btn2 = "Guardar";
    this.files = [];
    this.filesView = [];
  }

  eliminarImgPreUpload(i: any) {
    this.files.splice(i, 1);
    this.filesView.splice(i, 1);
    this.showUploadImg = true;
  }

  fileChangeEvent(fileInput: any) {
    this.showUploadImg = false;
    this.filesToUpload = <Array<File>>fileInput.target.files;
    for (let i = 0;i<this.filesToUpload.length ;i++){
      this.files.push(this.filesToUpload[i]);
      this.blobFile(this.filesToUpload[i]).then((res: any) => {
        this.filesView.push(res.base);
      })
    }
    console.log(this.files);
    console.log(this.filesView);

  }

  blobFile = async ($event: any) => new Promise((resolve, reject):any => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

}
