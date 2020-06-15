export interface IAddress {

    id: number;
    street: string;
    numberStreet: string;
    postalCode: number;
    town?: string;
    city?: string;
    country?: string;
    additionalInfo?: string;

}
