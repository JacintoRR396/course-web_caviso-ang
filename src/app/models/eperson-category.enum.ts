export enum EPersonCategory {
    PREBABY = 'Prebenjamin',
    MINIBABY = 'Minibenjamin',
    BABY = 'Benjamin',
    ALEVINE = 'Alevin',
    INFANTILE = 'Infantil',
    CADET = 'Cadete',
    JUVENILE = 'Juvenil',
    JUNIOR = 'Junior',
    PROMISE = 'Promesa',
    SENIOR = 'Senior',
    VETERAN = 'Veterano',
}

// tslint:disable-next-line: no-namespace
export namespace EPersonCategory{
    export function calculateCategoryByAge(age: number): EPersonCategory{
        if (age <= 4){ return EPersonCategory.PREBABY; }
        if (age <= 6){ return EPersonCategory.MINIBABY; }
        if (age <= 8){ return EPersonCategory.BABY; }
        if (age <= 10){ return EPersonCategory.ALEVINE; }
        if (age <= 12){ return EPersonCategory.INFANTILE; }
        if (age <= 14){ return EPersonCategory.CADET; }
        if (age <= 16){ return EPersonCategory.JUVENILE; }
        if (age <= 18){ return EPersonCategory.PROMISE; }
        if (age <= 34){ return EPersonCategory.SENIOR; }
        return EPersonCategory.VETERAN;
    }
}
