import { IAddress } from './iaddress';

export class Address implements IAddress {

    public static readonly REG_EXP_INDEX = '^(\\d{1,8})';
    public static readonly REG_EXP_STREET = '^[A-Z]{1}[a-zñA-Záéíóú\\s/]{2,80}';
    public static readonly REG_EXP_NUMBER = '^[0-9]{1,5}[A-Z]?$';
    public static readonly REG_EXP_TOWN = '^[A-Z]{1}[a-zñA-Záéíóú\\s/]{2,60}';
    public static readonly REG_EXP_CITY = '^[A-Z]{1}[a-zñA-Záéíóú\\s/]{2,40}';
    public static readonly REG_EXP_COUNTRY = '^[A-Z]{1}[a-zñA-Záéíóú\\s/]{2,40}';
    public static readonly REG_EXP_POSTAL_CODE = '^(5[0-2]|[0-4][0-9])[0-9]{3}$';
    public static readonly REG_EXP_ADDITIONAL_INFO = '^[A-Z]{1}[a-zA-Záéíóú\\s\\.\\_\\-,;()¿?!¡=]{3,2500}';

    id: number;
    street: string;
    numberStreet: string;
    postalCode: number;
    town?: string;
    city?: string;
    country?: string;
    additionalInfo?: string;

    constructor(id: number, street: string, numberStreet: string, postalCode: number, town = '', city = '', country = '', additionalInfo = ''){
        this.id = id;
        this.street = street;
        this.numberStreet = numberStreet;
        this.postalCode = postalCode;
        this.town = town;
        this.city = city;
        this.country = country;
        this.additionalInfo = additionalInfo;
    }

}
