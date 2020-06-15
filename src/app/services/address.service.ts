import { Injectable } from '@angular/core';
import { IAddress } from '../models/iaddress';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  /* VARIABLES */
  addresses: Array<IAddress> = [];

  /* CONSTRUCTORS */
  constructor() {
    this.createAddresses();
  }

  /* GETTERS AND SETTERS */
  getAddress(id: number): IAddress{
    return this.addresses[id];
  }

  addAddress(street: string, numberStreet: string, postalCode: number,
             town?: string, city?: string, country?: string, additionalInfo?: string): void{
    const address: IAddress = new Address(this.addresses.length, street, numberStreet, postalCode, town, city, country, additionalInfo);
    this.addresses.push(address);
  }

  getAddresses(): Array<IAddress>{
    return this.addresses;
  }

  /* METHODS OF INSTANCE */
  createAddresses(): void{
    this.addAddress('Corredera', '155A', 41520, 'El Viso del Alcor', 'Sevilla', 'España', 'Piso');
    this.addAddress('Torreorgaz', '38', 41016, 'Torreblanca de los Caños', 'Sevilla', 'España', 'Vivienda temporal');
    this.addAddress('Real', '', 41510, 'Mairena del Alcor', 'Sevilla', 'España');
  }

}
