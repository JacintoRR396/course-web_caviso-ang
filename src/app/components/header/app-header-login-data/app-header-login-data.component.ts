import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-login-data',
  templateUrl: './app-header-login-data.component.html',
  styleUrls: ['./app-header-login-data.component.scss']
})
export class AppHeaderLoginDataComponent implements OnInit {

  @Input() bLoginSon: boolean;

  constructor() { }

  ngOnInit(): void {

  }

}
