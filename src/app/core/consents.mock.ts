import { Consent } from './../shared/interfaces/consent.interface';

export const consents: Consent[] = [
    { name: 'John', email: 'john@gmail.com', checks: { firstCheck: true, secondCheck: false, thirdCheck: true } },
    { name: 'Johanes', email: 'Johanes@gmail.com', checks: { firstCheck: true, secondCheck: true, thirdCheck: true } },
    { name: 'Emili', email: 'Emili@gmail.com', checks: { firstCheck: false, secondCheck: false, thirdCheck: true } },
    { name: 'Blala', email: 'Blala@gmail.com', checks: { firstCheck: true, secondCheck: false, thirdCheck: true } },
    { name: 'Elizabet', email: 'Elizabet@gmail.com', checks: { firstCheck: true, secondCheck: true, thirdCheck: true } },
    { name: 'Grisha', email: 'Grisha@gmail.com', checks: { firstCheck: false, secondCheck: false, thirdCheck: true } },
    { name: 'Mishel', email: 'Mishel@gmail.com', checks: { firstCheck: false, secondCheck: true, thirdCheck: false } },
    { name: 'Bob', email: 'Bob@gmail.com', checks: { firstCheck: false, secondCheck: false, thirdCheck: true } },
    { name: 'Liza', email: 'Liza@gmail.com', checks: { firstCheck: true, secondCheck: false, thirdCheck: true } },
    { name: 'Henry', email: 'Henry@gmail.com', checks: { firstCheck: true, secondCheck: true, thirdCheck: false } }
];
