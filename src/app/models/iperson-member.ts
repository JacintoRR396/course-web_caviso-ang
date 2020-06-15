import {EPersonGender} from './eperson-gender.enum';
import { IPerson } from './iperson';
import { EPersonCharge } from './eperson-charge.enum';
import { EPersonCategory } from './eperson-category.enum';

export interface IPersonMember extends IPerson {

    idPM: number;
    numMember: number;
    eGender: EPersonGender;
    eCharge: EPersonCharge;
    eCategory: EPersonCategory;
    admissionDate: Date;
    highDate: Date;
    alias?: string;
    lowDate?: Date;
    numRaces?: number;

}
