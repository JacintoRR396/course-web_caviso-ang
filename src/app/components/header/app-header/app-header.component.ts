import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface MenuItem{
  name: string,
  path: string
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

  menuItems: Array<MenuItem> = [];
  menuItem0: MenuItem = { name: 'Inicio', path: '/' };
  menuItem1: MenuItem = { name: 'Miembros', path: '/miembros' };
  menuItem2: MenuItem = { name: 'Carreras', path: '/carreras' };
  menuItem3: MenuItem = { name: 'Noticias', path: '/noticias' };
  menuItem4: MenuItem = { name: 'Entrenos', path: '/entrenos' };

  bLogin: boolean;

  formForgotten: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initMenu();
    this.bLogin = false;
    this.formForgottenCreate();
  }

  initMenu(){
    this.menuItems.push(this.menuItem1);
    this.menuItems.push(this.menuItem2);
    this.menuItems.push(this.menuItem3);
    this.menuItems.push(this.menuItem4);
  }

  formForgottenCreate(){
    this.formForgotten = this.formBuilder.group({
      formForgotPassUsername: ['', Validators.compose([
        Validators.required, Validators.minLength(2), Validators.pattern('^[A-Z]{1}[a-zñA-Záéíóú\\s/]{2,29}')
      ])],
      formForgotPassEmail: ['', Validators.compose([
        Validators.required, Validators.email
      ])]
    });
  }

  formForgottenSubmit(){
    console.log('Values:', this.formForgotten.value);
    if (this.formForgotten.valid){
      console.log('Solicitando reset password ...');
      this.formForgotten.reset();
    }
}

}
