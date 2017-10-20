export class Trip {
    constructor(public id: string,
        public name: string,
        public destination: Array<String>,
        public approvedTravellersCount: number,
        public partnersReqd: number,
        public coverPhoto: Object,
        public dateStart: Date,
        public dateEnd: Date) { }
}