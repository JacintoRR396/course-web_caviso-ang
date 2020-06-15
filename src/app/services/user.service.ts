import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';
import { User } from '../models/user';
import { EUserRol } from '../models/euser-rol.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* VARIABLES */
  users: Array<IUser> = [];
  user: IUser = null;

  /* CONSTRUCTORS */
  constructor() {
    this.createUsers();
  }

  /* GETTERS AND SETTERS */
  getUser(id: number): IUser{
    return this.users[id];
  }

  addUser(username: string, passwd: string, email: string, rol?: EUserRol): void{
    const user: IUser = new User(this.users.length, username, passwd, email, rol);
    this.users.push(user);
  }

  getUsers(): Array<IUser>{
    return this.users;
  }

  /* METHODS OF INSTANCE */
  createUsers(): void{
    this.addUser('Balbino36', 'Balbi@36', 'balbino36@gmail.com', EUserRol.ADMIN);
    this.addUser('Rocio30', 'Rocio@30', 'ro30@gmail.com');
    this.addUser('Mari33', 'Mari@33', 'mari33@gmail.com');
  }

  existUserByUsername(username: string): IUser{
    const res = this.users.find( (us) => {
      return us.username.toLowerCase() === username.toLowerCase();
    });
    return res;
  }

  existUserByUsernameAndPasswd(username: string, passwd: string): IUser{
    const res = this.users.find( (us) => {
      return us.username.toLowerCase() === username.toLowerCase()
        && us.password.toLowerCase() === passwd.toLowerCase();
    });
    return res;
  }

  existUserByUsernameAndEmail(username: string, email: string): IUser{
    const res = this.users.find( (us) => {
      return us.username.toLowerCase() === username.toLowerCase()
        && us.email.toLowerCase() === email.toLowerCase();
    });
    return res;
  }

}
