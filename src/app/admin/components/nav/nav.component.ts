import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AuthService} from 'src/app/sesion/services/auth.service';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: any = {
    id: null,
    firstName: null,
    lastName: null,
    email: null
  };
  menu = [
    {
      type: 'menu',
      icon: 'fs-4 bi bi-bag-check-fill',
      title: 'Publicaciones',
      url: 'publicaciones',
      subMenu: null
    },
    {
      type: 'menu',
      icon: 'fs-4 bi bi-box2-fill',
      title: 'Productos',
      url: 'productos',
      subMenu: null
    },
    {
      type: 'menu',
      icon: 'fs-4 bi bi-list-stars',
      title: 'Categorias',
      url: 'categorias',
      subMenu: null
    },
    {
      type: 'menu',
      icon: 'fs-4 bi bi-people-fill',
      url: 'usuarios',
      title: 'Usuarios'
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private data: DataService
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  signout() {
    this.auth.signout();
  }

  getUser() {
    this.user = this.auth.getuser();
    // console.log(this.user);
    this.data.user = this.user;
  }

}
