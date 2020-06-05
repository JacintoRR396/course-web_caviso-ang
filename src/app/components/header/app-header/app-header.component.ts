import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

  menuItems: Array<MenuItem> = [];

  menuItem0: MenuItem = {
    name: 'Inicio',
    path: '/'
  };
  menuItem1: MenuItem = {
    name: 'Miembros',
    path: '/miembros'
  };
  menuItem2: MenuItem = {
    name: 'Carreras',
    path: '/carreras'
  };
  menuItem3: MenuItem = {
    name: 'Noticias',
    path: '/noticias'
  };
  menuItem4: MenuItem = {
    name: 'Entrenos',
    path: '/entrenos'
  };

  constructor() { }

  ngOnInit(): void {
    this.menuItems.push(this.menuItem1);
    this.menuItems.push(this.menuItem2);
    this.menuItems.push(this.menuItem3);
    this.menuItems.push(this.menuItem4);
  }

}

interface MenuItem{
  name:string,
  path:string
}
