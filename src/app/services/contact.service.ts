import { Injectable } from '@angular/core';
import { IContact } from '../models/icontact';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /* VARIABLES */
  contacts: Array<IContact> = [];

  /* CONSTRUCTORS */
  constructor() {
    this.createContacts();
  }

  /* GETTERS AND SETTERS */
  getContact(id: number): IContact{
    return this.contacts[id];
  }

  addContact(email: string, phoneMobile?: string, phoneHome?: string): void{
    const contact: IContact = new Contact(this.contacts.length, email, phoneMobile, phoneHome);
    this.contacts.push(contact);
  }

  getContacts(): Array<IContact>{
    return this.contacts;
  }

  /* METHODS OF INSTANCE */
  createContacts(): void{
    this.addContact('balbino36@gmail.com', '610972145', '955278768');
    this.addContact('ro30@gmail.com', '666944116');
    this.addContact('mari32@gmail.com', '666999333', '955741123');
  }

}
