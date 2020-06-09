import { IUser } from './iuser';
import { EUserRol } from './euser-rol.enum';

export class User implements IUser{

    id: number;
    username: string;
    password: string;
    email: string;
    rol: EUserRol;
    lastAccess?: Date;

    constructor(){
        this.id = this.id;
        this.username = this.username;
        this.password = this.password;
        this.email = this.email;
        this.rol = EUserRol.DEFAULT;
        this.lastAccess = new Date();
    }

}