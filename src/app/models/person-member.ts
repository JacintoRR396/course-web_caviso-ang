import { IPerson } from './iperson';
import { Person } from './person';

import { IPersonMember } from './iperson-member';
import { EPersonGender } from './eperson-gender.enum';
import { EPersonCharge } from './eperson-charge.enum';
import { EPersonCategory } from './eperson-category.enum';

export class PersonMember extends Person implements IPersonMember {

    public static readonly REG_EXP_NUM_NUMBER = '^[0-9]{1,5}$';
    public static readonly REG_EXP_DATE = '^(0?[1-9]|[12][0-9]|3[01])\\/(0?[1-9]|1[012])\\/\\d{2,4}$';
    public static readonly REG_EXP_ALIAS = '^[A-Z]{1}[a-zñA-Záéíóú0-9\\s/]{2,30}';
    public static readonly REG_EXP_NUM_RACES = '^[0-9]{1,5}$';

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

    constructor(oPerson: IPerson, idPM: number, numMember: number, eGender: EPersonGender,
                eCharge: EPersonCharge, eCategory: EPersonCategory, admissionDate: Date, highDate: Date, alias = '',
                lowDate = null, numRaces = 0){
        super(oPerson.id, oPerson.name, oPerson.surname, oPerson.birthdate, oPerson.eDocType,
            oPerson.docNumber, oPerson.oAddress, oPerson.oContact, oPerson.oUser,
            oPerson.balance, oPerson.pathImage, oPerson.description, oPerson.oSocialMedia);
        this.idPM = idPM;
        this.numMember = numMember;
        this.eGender = eGender;
        this.eCharge = eCharge;
        this.eCategory = eCategory;
        this.admissionDate = admissionDate;
        this.highDate = highDate;
        this.alias = alias;
        this.lowDate = lowDate;
        this.numRaces = numRaces;
    }

    /*constructor(id: number, name: string, surname: string, birthdate: Date, eDocType = EPersonDocType.EMPTY,
        docNumber = '', oAddress: IAddress, oContact: IContact, oUser: IUser, balance = 0.0,
        pathImage = '', description = '', oSocialMedia = null, idPM: number, numMember: number, eGender: EPersonGender,
        eCharge: EPersonCharge, eCategory: EPersonCategory, admissionDate: Date, highDate: Date, alias = '',
        lowDate = null, numRaces = 0){
        super(id, name, surname, birthdate, eDocType, docNumber, oAddress, oContact, oUser, balance,
            pathImage, description, oSocialMedia);
        this.idPM = idPM;
        this.numMember = numMember;
        this.eGender = eGender;
        this.eCharge = eCharge;
        this.eCategory = eCategory;
        this.admissionDate = admissionDate;
        this.highDate = highDate;
        this.alias = alias;
        this.lowDate = lowDate;
        this.numRaces = numRaces;
    }*/

}
