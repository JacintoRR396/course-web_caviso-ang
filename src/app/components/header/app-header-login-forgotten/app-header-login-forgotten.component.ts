import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-login-forgotten',
  templateUrl: './app-header-login-forgotten.component.html',
  styleUrls: ['./app-header-login-forgotten.component.scss']
})
export class AppHeaderLoginForgottenComponent implements OnInit {

  @Input() bLoginSon: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
