import { IUser } from './iuser';
import { EUserRol } from './euser-rol.enum';


export class User implements IUser{

    public static readonly REG_EXP_INDEX = '^(\\d{1,8})';
    public static readonly REG_EXP_USERNAME = '^[A-Z]{1}[a-zñA-Záéíóú0-9\\s/]{2,30}';
    public static readonly REG_EXP_PASSWD = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=\\S+$).{8,}$';

    id: number;
    username: string;
    password: string;
    email: string;
    rol: EUserRol;
    lastAccess?: Date;

    constructor(id: number, username: string, password: string, email: string, rol = EUserRol.USER, lastAccess = new Date()){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.rol = rol;
        this.lastAccess = lastAccess;
    }

}
