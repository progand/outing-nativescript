export class Trip {
    constructor(public id: string, 
        public name: string, 
        public destination: Array<String>,
        public approvedTravellersCount: number, 
        public partnersReqd: number) { }
}