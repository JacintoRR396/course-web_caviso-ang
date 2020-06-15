import { EPersonDocType } from './eperson-doc-type.enum';
import { IAddress } from './iaddress';
import { IContact } from './icontact';
import { ISocialMedia } from './isocial-media';
import { IUser } from './iuser';

export interface IPerson {

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

}
