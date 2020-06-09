import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

interface MenuItem{
  name: string;
  path: string;
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

  formForgotten: FormGroup;
  formLogin: FormGroup;
  formRegister: FormGroup;

  userLogin: User;
  bLogin: boolean;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initMenu();
    this.createFormForgotten();
    this.createFormLogin();
    this.initUserLogin();
  }

  // *** MENU ***
  initMenu(){
    this.menuItems.push(this.menuItem1);
    this.menuItems.push(this.menuItem2);
    this.menuItems.push(this.menuItem3);
    this.menuItems.push(this.menuItem4);
  }

  // *** FORM FORGOTTEN PASSWORD ***
  createFormForgotten(){
    // create
    this.formForgotten = this.formBuilder.group({
      formForgotPassUsername: ['', Validators.compose([
        Validators.required, Validators.minLength(2), Validators.pattern('^[A-Z]{1}[a-zñA-Záéíóú0-9\\s/]{2,29}')
      ])],
      formForgotPassEmail: ['', Validators.compose([
        Validators.required, Validators.email
      ])]
    });
    // suscription
    this.formForgotten.controls.formForgotPassUsername.valueChanges.subscribe(data => console.log(data));
    this.formForgotten.controls.formForgotPassEmail.valueChanges.subscribe(data => console.log(data));
  }

  submitFormForgotten(){
    console.log('Values:', this.formForgotten.value);
    if (this.formForgotten.valid){
      console.log('Solicitando reset password para', this.formForgotten.controls.formForgotPassUsername.value , ' ...');
      this.formForgotten.reset();
    }
  }

  // *** FORM ACCESS LOGIN ***
  createFormLogin(){
    // create
    this.formLogin = this.formBuilder.group({
      formLoginUsername: ['', Validators.compose([
        Validators.required, Validators.pattern('^[A-Z]{1}[a-zñA-Záéíóú0-9\\s/]{2,29}')
      ])],
      formLoginPasswd:['', Validators.compose([
        Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=\\S+$).{8,}$')
      ])]
    });
    // suscription
    this.formLogin.controls.formLoginUsername.valueChanges.subscribe(data => console.log(data));
    this.formLogin.controls.formLoginPasswd.valueChanges.subscribe(data => console.log(data));
  }

  submitFormLogin(){
    console.log('Values:', this.formLogin.value);
    if (this.formLogin.valid){
      this.userLogin = this.userService.existUserByUsernameAndPasswd(
        this.formLogin.value.formLoginUsername, this.formLogin.value.formLoginPasswd);
      if (typeof(this.userLogin) !== 'undefined'){
        this.userService.user = this.userLogin;
        console.log(this.userService.user);
        // TODO no persite los datos aún
        this.bLogin = true;
      }else{
        this.bLogin = false;
      }
      this.formLogin.reset();
    }
  }

  // *** FORM REGISTER ***
  // TODO

  // *** USER ***
  initUserLogin(){
    if (typeof(this.userService.user.id) !== 'undefined'){
      this.userLogin = this.userService.user;
      this.bLogin = true;
    }else{
      this.bLogin = false;
    }
  }

}
