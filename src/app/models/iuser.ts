import {EUserRol} from './euser-rol.enum';

export interface IUser {

    id: number;
    username: string;
    password: string;
    email: string;
    rol?: EUserRol;
    lastAccess?: Date;

}
