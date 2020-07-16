import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/iuser';
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
  menuItem0: MenuItem = { name: 'Miembros', path: '/miembros' };
  menuItem1: MenuItem = { name: 'Carreras', path: '/carreras' };
  menuItem2: MenuItem = { name: 'Noticias', path: '/noticias' };
  menuItem3: MenuItem = { name: 'Entrenos', path: '/entrenos' };

  formForgotten: FormGroup;
  bForgottenShowMsg: boolean;
  bForgottenValid: boolean;
  inputForgottenUsername: HTMLElement;
  bForgottenUsernameValid: boolean;
  inputForgottenEmail: HTMLElement;
  bForgottenEmailValid: boolean;

  formLogin: FormGroup;
  bLoginShowMsg: boolean;
  bLoginValid: boolean;
  inputLoginUsername: HTMLElement;
  bLoginUsernameValid: boolean;
  inputLoginPasswd: HTMLElement;
  bLoginPasswdValid: boolean;

  formRegister: FormGroup;
  bRegisterShowMsg: boolean;
  bRegisterValid: boolean;
  inputRegisterUsername: HTMLElement;
  bRegisterUsernameValid: boolean;
  inputRegisterPasswdConfirm: HTMLElement;
  bRegisterPasswdConfirmValid: boolean;

  bLogado: boolean;
  userLogin: IUser;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initMenu();

    this.createFormForgotten();
    this.createFormLogin();
    this.createFormRegister();

    this.bLogado = false;
    this.checkUserLoginFather();
  }

  // *** MENU ***
  initMenu(){
    this.menuItems.push(this.menuItem0);
    this.menuItems.push(this.menuItem1);
    this.menuItems.push(this.menuItem2);
    this.menuItems.push(this.menuItem3);
  }

  // *** FORM FORGOTTEN PASSWORD ***
  createFormForgotten(){
    // create
    this.formForgotten = this.formBuilder.group({
      formForgottenUsername: ['', Validators.compose([
        Validators.required, Validators.minLength(2), Validators.pattern(User.REG_EXP_USERNAME)
      ])],
      formForgottenEmail: ['', Validators.compose([
        Validators.required, Validators.email
      ])]
    });
    // suscription
    this.formForgotten.controls.formForgottenUsername.valueChanges.subscribe(data => {
      if (data !== null) {
        console.log('Form Forgotten : Username » ', data);
        this.bForgottenShowMsg = false;
        this.inputForgottenUsername = document.getElementsByName('formForgottenUsername')[0];
        this.inputForgottenUsername.style.color = 'black';
      }
    });
    this.formForgotten.controls.formForgottenEmail.valueChanges.subscribe(data => {
      if (data !== null) {
        console.log('Form Forgotten : Email » ', data);
        this.bForgottenShowMsg = false;
        this.inputForgottenEmail = document.getElementsByName('formForgottenEmail')[0];
        this.inputForgottenEmail.style.color = 'black';
      }
    });
    // status
    this.bForgottenShowMsg = false;
    this.bForgottenValid = false;
    this.bForgottenUsernameValid = false;
    this.bForgottenEmailValid = false;
  }

    submitFormForgotten(event: any){
      event.preventDefault();
      if (this.formForgotten.valid){
        this.bForgottenShowMsg = true;
        // Search if user exists by username
        let userForgotten: IUser = this.userService.existUserByUsername(
          this.formForgotten.value.formForgottenUsername);
        this.bForgottenUsernameValid = typeof(userForgotten) !== 'undefined';
        if (this.bForgottenUsernameValid){
          // Search if user exists by username and email
          userForgotten = this.userService.existUserByUsernameAndEmail(
            this.formForgotten.value.formForgottenUsername, this.formForgotten.value.formForgottenEmail);
          this.bForgottenEmailValid = typeof(userForgotten) !== 'undefined';
          if(this.bForgottenEmailValid){
            // Show message of success
            this.bForgottenValid = true;
            // TODO generate new password valid and send by email --------------------
            userForgotten.password = 'Rocio@31';
            alert('Su nueva contraseña es : ' + userForgotten.password);
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
            // Show message of error by Email and obtain focus
            this.bForgottenValid = false;
            this.inputForgottenEmail = document.getElementsByName('formForgottenEmail')[0];
            this.inputForgottenEmail.style.color = '#dc3545';
            this.inputForgottenEmail.focus();
          }
        }else{
          // Show message of error by Username and obtain focus
          this.bForgottenValid = false;
          this.bForgottenEmailValid = true;
          this.inputForgottenUsername = document.getElementsByName('formForgottenUsername')[0];
          this.inputForgottenUsername.style.color = '#dc3545';
          this.inputForgottenUsername.focus();
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
      if (data !== null) {
        console.log('Form Login : Username » ', data);
        this.bLoginShowMsg = false;
        this.inputLoginUsername = document.getElementsByName('formLoginUsername')[0];
        this.inputLoginUsername.style.color = 'black';
      }
    });
    this.formLogin.controls.formLoginPasswd.valueChanges.subscribe(data => {
      if (data !== null) {
        console.log('Form Login : Passwd » ', data);
        this.bLoginShowMsg = false;
        this.inputLoginPasswd = document.getElementsByName('formLoginPasswd')[0];
        this.inputLoginPasswd.style.color = 'black';
      }
    });
    // status
    this.bLoginShowMsg = false;
    this.bLoginValid = false;
    this.bLoginUsernameValid = false;
    this.bLoginPasswdValid = false;
  }

    submitFormLogin(event: any){
      event.preventDefault();
      if (this.formLogin.valid){
        this.bLoginShowMsg = true;
        // Search if user exists by username
        this.userLogin = this.userService.existUserByUsername(
          this.formLogin.value.formLoginUsername);
        this.bLoginUsernameValid = typeof(this.userLogin) !== 'undefined';
        if (this.bLoginUsernameValid){
          // Search if user exists by username and password
          this.userLogin = this.userService.existUserByUsernameAndPasswd(
            this.formLogin.value.formLoginUsername, this.formLogin.value.formLoginPasswd);
          this.bLoginPasswdValid = typeof(this.userLogin) !== 'undefined';
          if(this.bLoginPasswdValid){
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
            // Show message of error by Password and obtain focus
            this.bLogado = false;
            this.bLoginValid = false;
            this.inputLoginPasswd = document.getElementsByName('formLoginPasswd')[0];
            this.inputLoginPasswd.style.color = '#dc3545';
            this.inputLoginPasswd.focus();
          }
        }else{
          // Show message of error by Username and obtain focus
          this.bLogado = false;
          this.bLoginValid = false;
          this.bLoginPasswdValid = true;
          this.inputLoginUsername = document.getElementsByName('formLoginUsername')[0];
          this.inputLoginUsername.style.color = '#dc3545';
          this.inputLoginUsername.focus();
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
      if (data !== null) {
        console.log('Form Register : Username » ', data);
        this.bRegisterShowMsg = false;
        this.inputRegisterUsername = document.getElementsByName('formRegisterUsername')[0];
        this.inputRegisterUsername.style.color = 'black';
      }
    });
    this.formRegister.controls.formRegisterEmail.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Register : Email » ', data); }
    });
    this.formRegister.controls.formRegisterPasswd.valueChanges.subscribe(data => {
      if (data !== null) { console.log('Form Register : Password » ', data); }
    });
    this.formRegister.controls.formRegisterPasswdConfirm.valueChanges.subscribe(data => {
      if (data !== null) {
        console.log('Form Register : Password Confirm » ', data);
        this.bRegisterShowMsg = false;
        this.inputRegisterPasswdConfirm = document.getElementsByName('formRegisterPasswdConfirm')[0];
        this.inputRegisterPasswdConfirm.style.color = 'black';
      }
    });
    // statis
    this.bRegisterShowMsg = false;
    this.bRegisterValid = false;
    this.bRegisterUsernameValid = false;
    this.bRegisterPasswdConfirmValid = false;

  }

    submitFormRegister(event: any){
      event.preventDefault();
      if (this.formRegister.valid){
        this.bRegisterShowMsg = true;
        // Search if user exists by username
        const userRegister: IUser = this.userService.existUserByUsername(
          this.formRegister.value.formRegisterUsername);
        this.bRegisterUsernameValid = typeof(userRegister) === 'undefined';
        if (this.bRegisterUsernameValid){
          this.bRegisterPasswdConfirmValid =
            this.formRegister.value.formRegisterPasswd === this.formRegister.value.formRegisterPasswdConfirm;
          if(this.bRegisterPasswdConfirmValid){
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
            // Show message of error by PasswdConfirm and obtain focus
            this.bRegisterValid = false;
            this.inputRegisterPasswdConfirm = document.getElementsByName('formRegisterPasswdConfirm')[0];
            this.inputRegisterPasswdConfirm.style.color = '#dc3545';
            this.inputRegisterPasswdConfirm.focus();
          }
        }else{
          // Show message of error by Username and obtain focus
          this.bRegisterValid = false;
          this.bRegisterPasswdConfirmValid = true;
          this.inputRegisterUsername = document.getElementsByName('formRegisterUsername')[0];
          this.inputRegisterUsername.style.color = '#dc3545';
          this.inputRegisterUsername.focus();
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
