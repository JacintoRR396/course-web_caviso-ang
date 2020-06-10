import { IUser } from './iuser';
import { EUserRol } from './euser-rol.enum';


export class User implements IUser{

    public static readonly REG_EXP_USERNAME = '^[A-Z]{1}[a-zñA-Záéíóú0-9\\s/]{2,29}';

    public static readonly REG_EXP_PASSWD = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=\\S+$).{8,}$';

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