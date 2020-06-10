import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header-login-data',
  templateUrl: './app-header-login-data.component.html',
  styleUrls: ['./app-header-login-data.component.scss']
})
export class AppHeaderLoginDataComponent implements OnInit, OnChanges {

  @Input() bLoginFather: boolean;
  @Output() bLoginSon = new EventEmitter<boolean>();
  userLogin: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.checkUserLogin();
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['bLoginFather'];
    const curVal  = JSON.stringify(change.currentValue);
    const prevVal = JSON.stringify(change.previousValue);
    if (curVal !== prevVal){
      this.checkUserLogin();
    }
 }

  checkUserLogin(){
    // In the service the default user is created, so it is not undefined but its id is
    if (this.userService.user !== null && typeof(this.userService.user.id) !== 'undefined'){
      this.userLogin = this.userService.user;
    }
  }

  signOff(event: any){
    event.preventDefault();
    this.userLogin = null;
    this.userService.user = null;
    // Communicate the value of bLogin to the father
    this.bLoginSon.emit(false);
  }

}
