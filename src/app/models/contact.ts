import { IContact } from './icontact';

export class Contact implements IContact {

    public static readonly REG_EXP_EMAIL = '^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$';
    public static readonly REG_EXP_PHONE_MOBILE = '^(\\+34|0034|34)?[\\s|\\-|\\.]?[6|7|9][\\s|\\-|\\.]?([0-9][\\s|\\-|\\.]?){8}$';
    public static readonly REG_EXP_PHONE_HOME = '^[9][0-9]{1}[\\s|\\-|\\.]?([0-9][\\s|\\-|\\.]?){7}$';

    id: number;
    email: string;
    phoneMobile?: string;
    phoneHome?: string;

    constructor(id: number, email: string, phoneMobile = '', phoneHome = ''){
        this.id = id;
        this.email = email;
        this.phoneMobile = phoneMobile;
        this.phoneHome = phoneHome;
    }

}
