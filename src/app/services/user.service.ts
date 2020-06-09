import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { EUserRol } from '../models/euser-rol.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = [];
  user: User = new User();

  constructor() {
    this.createUsers();
  }

  createUsers(){
    const user1: User = new User();
    user1.id = 1;
    user1.username = 'Balbino36';
    user1.password = 'Balbi@36';
    user1.email = 'balbino36@gmail.com';
    user1.rol = EUserRol.ADMIN;
    user1.lastAccess = new Date();
    this.users.push(user1);

    const user2: User = new User();
    user2.id = 2;
    user2.username = 'Rocio30';
    user2.password = 'Rocio@30';
    user2.email = 'Ro30@gmail.com';
    user2.rol = EUserRol.USER;
    user2.lastAccess = new Date();
    this.users.push(user2);
  }

  existUserByUsernameAndPasswd(username: string, passwd: string){
    const res = this.users.find( (us) => {
      return us.username.toLowerCase() === username.toLowerCase()
        && us.password.toLowerCase() === passwd.toLowerCase();
    });
    return res;
  }

}
