import { IPerson } from './iperson';
import { EPersonDocType } from './eperson-doc-type.enum';
import { IAddress } from './iaddress';
import { IContact } from './icontact';
import { ISocialMedia } from './isocial-media';
import { IUser } from './iuser';
import { SocialMedia } from './social-media';

export class Person implements IPerson {

    public static readonly REG_EXP_DOC_NUMBER = '^((\\d{8})([A-Z])|[XYZ]\\d{7,8}[A-Z]|([ABCDEFGHJKLMNPQRSUVW])(\\d{7})([0-9A-J]))$';
    public static readonly REG_EXP_NAME = '^[A-Z]{1}[a-zñA-Záéíóú\\s\\.]{2,30}';
    public static readonly REG_EXP_SURNAME = '^[A-Z]{1}[a-zñA-Záéíóú\\s\\.]{2,50}';
    public static readonly REG_EXP_BIRTHDATE = '^(0?[1-9]|[12][0-9]|3[01])\\/(0?[1-9]|1[012])\\/\\d{2,4}$';
    public static readonly REG_EXP_BALANCE = '^[0-9]{1,5}[\\.|,]?[0-9]{0,2}$';
    public static readonly REG_EXP_PATH_IMAGE = '^[a-zA-Z0-9\\.\\/\\_\\-]{3,245}(.jpg|.jpeg|.png|.gif)$';
    public static readonly REG_EXP_DESCRIPTION = '^[A-Z]{1}[a-zA-Záéíóú\\s\\.\\_\\-,;()¿?!¡=]{3,5000}';

    id: number;
    name: string;
    surname: string;
    birthdate: Date;
    eDocType: EPersonDocType;
    docNumber: string;
    oAddress: IAddress;
    oContact: IContact;
    oUser: IUser;
    balance?: number;
    pathImage?: string;
    description?: string;
    oSocialMedia?: ISocialMedia;

    constructor(id: number, name: string, surname: string, birthdate: Date, eDocType = EPersonDocType.EMPTY,
                docNumber = '', oAddress: IAddress, oContact: IContact, oUser: IUser, balance = 0.0,
                pathImage = '', description = '', oSocialMedia = null){
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.birthdate = birthdate;
            this.eDocType = eDocType;
            this.docNumber = docNumber;
            this.oAddress = oAddress;
            this.oContact = oContact;
            this.oUser = oUser;
            this.balance = balance;
            this.pathImage = pathImage;
            this.description = description;
            this.oSocialMedia = oSocialMedia;
    }

}
