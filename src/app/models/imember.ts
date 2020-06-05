import {EUserGender} from './euser-gender.enum';

export interface IMember {
    id: number;
    name: string;
    surname: string;
    gender: EUserGender;
    alias?: string;
    description?: string;
    pathImage?: string;
}
