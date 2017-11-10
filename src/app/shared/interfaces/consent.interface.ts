export interface Consent {
    name: string;
    email: string;
    checks: ConsentChecks;
}

export interface ConsentChecks {
    firstCheck: boolean;
    secondCheck: boolean;
    thirdCheck: boolean;
}
