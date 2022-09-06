import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class Sw2Service {
  constructor() {}

  mostrarAlertaToast(title?: string, footer?: string, icon?: 'success' | 'error' | 'warning' | 'info' | 'question') {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      // onOpen: (toastt: any) => {
      //   toastt.addEventListener('mouseenter', Swal.stopTimer);
      //   toastt.addEventListener('mouseleave', Swal.resumeTimer);
      // },
    });

    Toast.fire({
      icon,
      title,
      footer,
    });
  }

  convertirObjToFormData(obj:any) {
    const formData = new FormData();

    // prevent to send empty fields
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== '') {
        formData.append(key, obj[key]);
      }
    });

    return formData;
  }

  alertaToEliminarItem(title: string) {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        text: 'No podrá revertir esta acción',
        icon: 'warning',
        cancelButtonText: 'No, cancelar',
        confirmButtonText: 'Si, eliminar',
        cancelButtonColor: '#d33',
        showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  alertaActionConfirm(
    title: string,
    confirmButton: string,
    text: string,
    icon?: 'success' | 'error' | 'warning' | 'info' | 'question'
  ): Promise<boolean> {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        text: text === '' ? 'No podrá revertir esta acción' : text,
        icon: icon ? icon : 'warning',
        cancelButtonText: 'No, cancelar',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButton,
      }).then((result) => {
        if (result.value) {
          resolve(true);
          return;
        }
        resolve(false);
      });
    });
  }

}
