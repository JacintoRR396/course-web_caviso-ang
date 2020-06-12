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
    this.addUser('Balbino36', 'Balbi@36', 'balbino36@gmail.com', EUserRol.ADMIN);
    this.addUser('Rocio30', 'Rocio@30', 'Ro30@gmail.com');
  }

  addUser(username: string, passwd: string, email: string, rol?: EUserRol){
    const user: User = new User();
    user.id = this.users.length;
    user.username = username;
    user.password = passwd;
    user.email = email;
    user.rol = (rol) ? rol : EUserRol.USER;
    user.lastAccess = new Date();
    this.users.push(user);
  }

  existUserByUsername(username: string){
    const res = this.users.find( (us) => {
      return us.username.toLowerCase() === username.toLowerCase();
    });
    return res;
  }

  existUserByUsernameAndPasswd(username: string, passwd: string){
    const res = this.users.find( (us) => {
      return us.username.toLowerCase() === username.toLowerCase()
        && us.password.toLowerCase() === passwd.toLowerCase();
    });
    return res;
  }

  existUserByUsernameAndEmail(username: string, email: string){
    const res = this.users.find( (us) => {
      return us.username.toLowerCase() === username.toLowerCase()
        && us.email.toLowerCase() === email.toLowerCase();
    });
    return res;
  }

}
