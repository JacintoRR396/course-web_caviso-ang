import { Injectable } from '@angular/core';

import { IPerson } from '../models/iperson';
import { Person } from '../models/person';
import { EPersonDocType } from '../models/eperson-doc-type.enum';
import { IAddress } from '../models/iaddress';
import { IContact } from '../models/icontact';
import { ISocialMedia } from '../models/isocial-media';
import { IUser } from '../models/iuser';

import { AddressService } from './address.service';
import { ContactService } from './contact.service';
import { SocialMediaService } from './social-media.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  /* VARIABLES */
  persons: Array<IPerson> = [];
  person: IPerson = null;

  /* CONSTRUCTORS */
  constructor(private addressService: AddressService, private contactService: ContactService,
              private userService: UserService, private socMediaService: SocialMediaService) {
    this.createPersons();
  }

  /* GETTERS AND SETTERS */
  getPerson(id: number): IPerson{
    return this.persons[id];
  }

  addPerson(name: string, surname: string, birthdate: Date, eDocType = EPersonDocType.EMPTY,
            docNumber: string, oAddress: IAddress, oContact: IContact, oUser: IUser, balance?: number,
            pathImage?: string, description?: string, oSocialMedia?: ISocialMedia): void{
    const person: IPerson = new Person(this.persons.length, name, surname, birthdate, eDocType, docNumber,
      oAddress, oContact, oUser, balance, pathImage, description, oSocialMedia);
    this.persons.push(person);
  }

  getPersons(): Array<IPerson>{
    return this.persons;
  }

  /* METHODS OF INSTANCE */
  createPersons(): void{
    this.addPerson('Jacinto', 'Roldán Rodríguez', new Date('1983-08-15'), EPersonDocType.DNI, '28646181A',
    this.addressService.getAddress(0), this.contactService.getContact(0), this.userService.getUser(0),
    43.56, '../../../assets/images/img_login/avatar_male.svg', 'Administrador de la Web');
    this.addPerson('Rocio', 'Boceta García', new Date('1989-08-14'), EPersonDocType.DNI, '30055255B',
    this.addressService.getAddress(1), this.contactService.getContact(1), this.userService.getUser(1),
    20.12, '../../../assets/images/img_login/avatar_female.svg');
    this.addPerson('Maria', 'Perez Burgos', new Date('1986-05-23'), EPersonDocType.DNI, '28646182G',
    this.addressService.getAddress(2), this.contactService.getContact(2), this.userService.getUser(2),
    31, '../../../assets/images/img_login/avatar_female.svg');
  }

}
