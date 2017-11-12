export interface Consent {
    name: string;
    email: string;
    processes: ConsentProcesses;
}

export interface ConsentProcesses {
    firstProcess: boolean;
    secondProcess: boolean;
    thirdProcess: boolean;
}
