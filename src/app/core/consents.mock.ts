import { Consent } from './../shared/interfaces/consent.interface';

export const consents: Consent[] = [
    { name: 'John', email: 'john@gmail.com', processes: { firstProcess: true, secondProcess: false, thirdProcess: true } },
    { name: 'Johanes', email: 'Johanes@gmail.com', processes: { firstProcess: true, secondProcess: true, thirdProcess: true } },
    { name: 'Emili', email: 'Emili@gmail.com', processes: { firstProcess: false, secondProcess: false, thirdProcess: true } },
    { name: 'Blala', email: 'Blala@gmail.com', processes: { firstProcess: true, secondProcess: false, thirdProcess: true } },
    { name: 'Elizabet', email: 'Elizabet@gmail.com', processes: { firstProcess: true, secondProcess: true, thirdProcess: true } },
    { name: 'Grisha', email: 'Grisha@gmail.com', processes: { firstProcess: false, secondProcess: false, thirdProcess: true } },
    { name: 'Mishel', email: 'Mishel@gmail.com', processes: { firstProcess: false, secondProcess: true, thirdProcess: false } },
    { name: 'Bob', email: 'Bob@gmail.com', processes: { firstProcess: false, secondProcess: false, thirdProcess: true } },
    { name: 'Liza', email: 'Liza@gmail.com', processes: { firstProcess: true, secondProcess: false, thirdProcess: true } },
    { name: 'Henry', email: 'Henry@gmail.com', processes: { firstProcess: true, secondProcess: true, thirdProcess: false } }
];
