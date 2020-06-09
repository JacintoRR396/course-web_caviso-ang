import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header-login-data',
  templateUrl: './app-header-login-data.component.html',
  styleUrls: ['./app-header-login-data.component.scss']
})
export class AppHeaderLoginDataComponent implements OnInit {

  @Input() bLoginSon: boolean;
  userLogin: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initUserLogin();
  }

  initUserLogin(){
    if (typeof(this.userService.user.id) !== undefined){
      this.userLogin = this.userService.user;
    }
  }

}
