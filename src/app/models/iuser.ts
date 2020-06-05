import {EUser} from './euser.enum';

export interface IUser {
    id: number;
    username: string;
    password: string;
    email: string;
    typeUser: EUser;
    lastAccess?: Date;
}
