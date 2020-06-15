import { Injectable } from '@angular/core';
import { IPerson } from '../models/iperson';
import { AddressService } from './address.service';
import { ContactService } from './contact.service';
import { UserService } from './user.service';
import { SocialMediaService } from './social-media.service';
import { PersonService } from './person.service';

import { IPersonMember } from '../models/iperson-member';
import { PersonMember } from '../models/person-member';
import { EPersonGender } from '../models/eperson-gender.enum';
import { EPersonCharge } from '../models/eperson-charge.enum';
import { EPersonCategory } from '../models/eperson-category.enum';

@Injectable({
  providedIn: 'root'
})
export class PersonMemberService extends PersonService {

  /* VARIABLES */
  personMembers: Array<IPersonMember> = [];
  personMember: IPersonMember = null;

  /* CONSTRUCTORS */
  constructor(addressService: AddressService, contactService: ContactService,
              userService: UserService, socMediaService: SocialMediaService) {
      super(addressService, contactService, userService, socMediaService);
      this.createPersonMembers();
    }

  /* GETTERS AND SETTERS */
  getPersonMember(id: number): IPersonMember{
    return this.personMembers[id];
  }

  addPersonMember(oPerson: IPerson, numMember: number, eGender: EPersonGender,
                  eCharge: EPersonCharge, eCategory: EPersonCategory, admissionDate: Date, highDate: Date,
                  alias?: string, lowDate?: Date, numRaces?: number): void{
      const personMember: IPersonMember = new PersonMember(oPerson, this.personMembers.length, numMember,
        eGender, eCharge, eCategory, admissionDate, highDate, alias, lowDate, numRaces);
      this.personMembers.push(personMember);
  }

  getPersonMembers(): Array<IPersonMember>{
    return this.personMembers;
  }

  /* METHODS OF INSTANCE */
  createPersonMembers(){
    this.addPersonMember(super.getPerson(0), 1, EPersonGender.MALE, EPersonCharge.VOCAL, EPersonCategory.VETERAN,
    new Date('2009-01-01'), new Date('2009-01-01'), 'Balbino', null, 3);
    this.addPersonMember(super.getPerson(1), 2, EPersonGender.FEMALE, EPersonCharge.EMPTY, EPersonCategory.SENIOR,
    new Date('2015-03-28'), new Date('2015-03-28'), 'Petarda');
    this.addPersonMember(super.getPerson(2), 3, EPersonGender.FEMALE, EPersonCharge.PRESIDENT, EPersonCategory.SENIOR,
    new Date('2012-11-07'), new Date('2012-11-07'), 'Troncosa', null, 12);
  }

}
