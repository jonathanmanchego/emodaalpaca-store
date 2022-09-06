import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QueryService } from 'src/app/services/query.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  
  isExpanded = false;
  isList = true;
  back = environment.back;
  public filesToUpload: Array<File>=[];
  public files: any = [];
  public filesView: any = [];
  public filesUploads: any = [];
  contadorFiles = 0;
  open = false;
  btn2 = 'Guardar';
  productos: any = null;
  categorias: any = null;
  productForm: FormGroup;
  constructor(
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private query: QueryService,
    private spinner: NgxSpinnerService
  ) { 
    this.productForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      colors: [null, [Validators.required]],
      sizes: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      description: [null, [Validators.required]],
      CATEGORY_PRODUCTS_id: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerCategorias();
  }
  
  async guardar() {
    if (this.productForm.invalid) {
      this.toastr.warning('Faltan datos');
      this.files = [];
      return;
    }
    if (!this.productForm.value.id) {
      console.log('guardando!');
      if (this.files.length>0) {
        this.spinner.show();
        const data:string = JSON.stringify(this.productForm.value);
        const formData: FormData = new FormData();
        formData.append('data', data);
        for (let i = 0; i < this.files.length; i++) {
          formData.append('files[]', this.files[i]);
        }
        const res = await this.query.guardarProducto(formData);
        console.log(res);
        this.spinner.hide();
      } else {
        this.toastr.warning('Falta fotos del producto');
        return;
      }
    }
    if (this.productForm.value.id > 0) {
      console.log('Actualizando!');
      this.spinner.show();
      const data:string = JSON.stringify(this.productForm.value);
      const formData: FormData = new FormData();
      formData.append('data', data);
      for (let i = 0; i < this.files.length; i++) {
        formData.append('files[]', this.files[i]);
      }
      formData.get('data')
      formData.get('file[]')
      const res: any = await this.query.editarProducto(this.productForm.value.id, formData);
      console.log(res);
      this.spinner.hide();
    }
    this.obtenerProductos();
    this.refreshForm();
  }

  async eliminar(id:any) {
    this.spinner.show();
    await this.query.eliminarProducto(id);
    this.spinner.hide();
    this.obtenerProductos();
  }

  editarShow(product: any) {
    console.log(product);
    this.productForm = this.fb.group({
      id: [product.id],
      name: [product.name, [Validators.required]],
      colors: [product.colors, [Validators.required]],
      sizes: [product.sizes, [Validators.required]],
      amount: [product.precios[0].amount, [Validators.required]],
      description: [product.description, [Validators.required]],
      CATEGORY_PRODUCTS_id: [product.CATEGORY_PRODUCTS_id, [Validators.required]]
    });
    this.filesUploads = product.imagenes;
    this.btn2 = 'Actualizar';
    this.isExpanded = true;
  }

  refreshForm() {
    this.productForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      colors: [null, [Validators.required]],
      sizes: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      description: [null, [Validators.required]],
      CATEGORY_PRODUCTS_id: [null, [Validators.required]]
    });
    this.btn2 = 'Guardar';
    this.files = [];
    this.filesView = [];
    this.filesUploads = [];
    this.isExpanded = false;
  }

  async obtenerCategorias() {
    this.spinner.show();
    const res: any = await this.query.obtenerCategorias({});;
    console.log(res);
    this.categorias = res.data;
    this.spinner.hide();
  }
  async obtenerProductos() {
    this.spinner.show();
    const res: any = await this.query.obtenerProductos({});;
    console.log(res);
    this.productos = res.data;
    this.spinner.hide();
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    for (let i = 0;i<this.filesToUpload.length ;i++){
      this.files.push(this.filesToUpload[i]);
      this.blobFile(this.filesToUpload[i]).then((res: any) => {
        this.filesView.push(res.base);
      })
      this.contadorFiles++;
    }
    console.log(this.files);
    console.log(this.filesView);
    
  }

  eliminarImgPreUpload(i:any) {
    this.files.splice(i, 1);
    this.filesView.splice(i,1);
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
