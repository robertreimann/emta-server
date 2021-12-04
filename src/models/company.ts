declare module 'company' {
    export interface Company {
        name: string;
        registryCode: string;
        type: string;
        registeredInNationalVATregister: boolean;
        fieldOfActivityInEMTAK: string;
        county: string;
        stateTaxes: string;
        labourTaxesAndPayments: string;
        turnover: string;
        numberOfEmployees: string;
    }
}