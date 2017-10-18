import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Trip } from "./trip";

@Injectable()
export class TripListService {
    constructor(private http: Http) { }

    load() {
        return this.http.get(Config.apiUrl + "/models/trips?action=includeRelationships")
            .map(res => res.json())
            .map(data => {
                let list = [];
                data.trips.forEach((trip) => {
                    list.push(new Trip(trip.id, trip.name, trip.destination, trip.approvedTravellersCount, trip.partnersReqd));
                });
                return list;
            })
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}