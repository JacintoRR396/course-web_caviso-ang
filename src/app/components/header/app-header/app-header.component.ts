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
  bForgottenShowMsg: boolean;
  bForgottenValid: boolean;

  formLogin: FormGroup;
  bLoginShowMsg: boolean;
  bLoginValid: boolean;

  formRegister: FormGroup;
  bRegisterShowMsg: boolean;
  bRegisterValid: boolean;

  bLogado: boolean;
  userLogin: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initMenu();

    this.createFormForgotten();
    this.bForgottenShowMsg = false;
    this.bForgottenValid = false;
    this.createFormLogin();
    this.bLoginShowMsg = false;
    this.bLoginValid = false;
    this.createFormRegister();

    this.bLogado = false;
    this.checkUserLoginFather();
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
        Validators.required, Validators.minLength(2), Validators.pattern(User.REG_EXP_USERNAME)
      ])],
      formForgotPassEmail: ['', Validators.compose([
        Validators.required, Validators.email
      ])]
    });
    // suscription
    this.formForgotten.controls.formForgotPassUsername.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Forgotten : Username » ', data); this.bForgottenShowMsg = false; }
    });
    this.formForgotten.controls.formForgotPassEmail.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Forgotten : Email » ', data); this.bForgottenShowMsg = false; }
    });
  }

    submitFormForgotten(event: any){
      event.preventDefault();
      if (this.formForgotten.valid){
        // Search if user exists by username and email
        const userForgotten: User = this.userService.existUserByUsernameAndEmail(
          this.formForgotten.value.formForgotPassUsername, this.formForgotten.value.formForgotPassEmail);
        this.bForgottenShowMsg = true;
        // Check if it exists to stay on Forgotten or go to Login
        if (typeof(userForgotten) !== 'undefined'){
          // Show message of success
          this.bForgottenValid = true;
          // TODO generate new password valid and send by email --------------------
          userForgotten.password = 'Rocio@31';
          // -----------------------------------------------------------------------
          setTimeout(() => {
            // Go to the logado and clean the current one
            const btn: HTMLElement = document.querySelector('#formForgotPass__linkLogin');
            btn.click();
          }, 2000);
          setTimeout(() => {
            // Clean form
            this.formForgotten.reset();
            this.bForgottenShowMsg = false;
          }, 3000);
        }else{
          // Show message of error
          this.bForgottenValid = false;
        }
      }
    }

  // *** FORM ACCESS LOGIN ***
  createFormLogin(){
    // create
    this.formLogin = this.formBuilder.group({
      formLoginUsername: ['', Validators.compose([
        Validators.required, Validators.minLength(2), Validators.pattern(User.REG_EXP_USERNAME)
      ])],
      formLoginPasswd: ['', Validators.compose([
        Validators.required, Validators.minLength(8), Validators.pattern(User.REG_EXP_PASSWD)
      ])]
    });
    // suscription
    this.formLogin.controls.formLoginUsername.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Login : Username » ', data); this.bLoginShowMsg = false; }
    });
    this.formLogin.controls.formLoginPasswd.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Login : Passwd » ', data); this.bLoginShowMsg = false; }
    });
  }

    submitFormLogin(event: any){
      event.preventDefault();
      if (this.formLogin.valid){
        // Search if user exists by username and password
        this.userLogin = this.userService.existUserByUsernameAndPasswd(
          this.formLogin.value.formLoginUsername, this.formLogin.value.formLoginPasswd);
        this.bLoginShowMsg = true;
        // Check if it exists to stay on Login or go to User Data
        if (typeof(this.userLogin) !== 'undefined'){
          // Show message of success
          this.bLoginValid = true;
          setTimeout(() => {
            this.bLogado = true;
            this.userService.user = this.userLogin;
          }, 2000);
          // Clean form
          setTimeout(() => {
            this.formLogin.reset();
            this.bLoginShowMsg = false;
          }, 3000);
        }else{
          this.bLogado = false;
          this.bLoginValid = false;
        }
      }
    }

  // *** FORM REGISTER ***
  createFormRegister(){
    // create
    this.formRegister = this.formBuilder.group({
      formRegisterUsername: ['', Validators.compose([
        Validators.required, Validators.minLength(2), Validators.pattern(User.REG_EXP_USERNAME)
      ])],
      formRegisterEmail: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      formRegisterPasswd: ['', Validators.compose([
        Validators.required, Validators.minLength(8), Validators.pattern(User.REG_EXP_PASSWD)
      ])],
      formRegisterPasswdConfirm: ['', Validators.compose([
        Validators.required, Validators.minLength(8), Validators.pattern(User.REG_EXP_PASSWD)
      ])]
    });
    // suscription
    this.formRegister.controls.formRegisterUsername.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Register : Username » ', data);  this.bRegisterShowMsg = false; }
    });
    this.formRegister.controls.formRegisterEmail.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Register : Email » ', data); }
    });
    this.formRegister.controls.formRegisterPasswd.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Register : Password » ', data); }
    });
    this.formRegister.controls.formRegisterPasswdConfirm.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Register : Password Confirm » ', data); }
    });
  }

    submitFormRegister(event: any){
      event.preventDefault();
      if (this.formRegister.valid){
        // Search if user exists by username
        const userRegister: User = this.userService.existUserByUsername(
          this.formRegister.value.formRegisterUsername);
        this.bRegisterShowMsg = true;
        // Check if it exists to stay on Register or go to Login
        if (typeof(userRegister) === 'undefined'){
          // Show message of success
          this.bRegisterValid = true;
          this.userService.addUser(this.formRegister.value.formRegisterUsername,
            this.formRegister.value.formRegisterPasswd, this.formRegister.value.formRegisterEmail);
          setTimeout(() => {
            // Go to the logado and clean the current one
            const btn: HTMLElement = document.querySelector('#formRegister__linkLogin');
            btn.click();
          }, 2000);
          setTimeout(() => {
            // Clean form
            this.formRegister.reset();
            this.bRegisterShowMsg = false;
          }, 3000);
        }else{
          // Show message of error
          // TODO comprobrar también que las contraseñas sean iguales
          this.bRegisterValid = false;
        }
      }
    }

  // *** USER ***
  // Check the logado in father, so as, here
  checkUserLoginFather(){
    // In the service the default user is created, so it is not undefined but its id is
    if (this.userService.user !== null && typeof(this.userService.user.id) !== 'undefined'){
      this.userLogin = this.userService.user;
      this.bLogado = true;
    }else{
      this.bLogado = false;
    }
  }

  // Check the logado from the child
  checkUserLoginSon(bLoginSon: boolean){
    this.bLogado = bLoginSon;
  }

}
