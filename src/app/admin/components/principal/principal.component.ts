import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  title = 'DASHBOARD';
  menu = [
    {
      type: 'menu',
      icon: 'fs-4 bi bi-bag-check-fill',
      title: 'Publicaciones',
      url: 'publicaciones',
      subMenu:null
    },
    {
      type: 'menu',
      icon: 'fs-4 bi bi-box2-fill',
      title: 'Productos',
      url: 'productos',
      subMenu:null
    },
    {
      type: 'menu',
      icon: 'fs-4 bi bi-list-stars',
      title: 'Categorias',
      url: 'categorias',
      subMenu:null
    },
    {
      type: 'menu',
      icon: 'fs-4 bi bi-people-fill',
      url: 'usuarios',
      title: 'Usuarios',
      // subMenu: [
      //   {
      //     icon: '',
      //     url: '',
      //     title:''
      //   },
      //   {
      //     icon: '',
      //     url: '',
      //     title:''
      //   },
      // ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  changeTitle(title:string) {
    this.title = title;
  }
}
