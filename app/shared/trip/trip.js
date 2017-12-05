"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trip = (function () {
    function Trip(id, name, destination, budgetFrom, budgetTo, approvedTravellersCount, partnersReqd, coverPhoto, organiser, dateStart, dateEnd, photos, tags) {
        this.id = id;
        this.name = name;
        this.destination = destination;
        this.budgetFrom = budgetFrom;
        this.budgetTo = budgetTo;
        this.approvedTravellersCount = approvedTravellersCount;
        this.partnersReqd = partnersReqd;
        this.coverPhoto = coverPhoto;
        this.organiser = organiser;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.photos = photos;
        this.tags = tags;
    }
    return Trip;
}());
exports.Trip = Trip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNJLGNBQW1CLEVBQVUsRUFDbEIsSUFBWSxFQUNaLFdBQTBCLEVBQzFCLFVBQWtCLEVBQ2xCLFFBQWdCLEVBQ2hCLHVCQUErQixFQUMvQixZQUFvQixFQUNwQixVQUFrQixFQUNsQixTQUFpQixFQUNqQixTQUFlLEVBQ2YsT0FBYSxFQUNiLE1BQXFCLEVBQ3JCLElBQW1CO1FBWlgsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBUTtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQU07UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQWU7SUFBSSxDQUFDO0lBQ3ZDLFdBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRyaXAge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgZGVzdGluYXRpb246IEFycmF5PFN0cmluZz4sXG4gICAgICAgIHB1YmxpYyBidWRnZXRGcm9tOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBidWRnZXRUbzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgYXBwcm92ZWRUcmF2ZWxsZXJzQ291bnQ6IG51bWJlcixcbiAgICAgICAgcHVibGljIHBhcnRuZXJzUmVxZDogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgY292ZXJQaG90bzogT2JqZWN0LFxuICAgICAgICBwdWJsaWMgb3JnYW5pc2VyOiBPYmplY3QsXG4gICAgICAgIHB1YmxpYyBkYXRlU3RhcnQ6IERhdGUsXG4gICAgICAgIHB1YmxpYyBkYXRlRW5kOiBEYXRlLFxuICAgICAgICBwdWJsaWMgcGhvdG9zOiBBcnJheTxPYmplY3Q+LFxuICAgICAgICBwdWJsaWMgdGFnczogQXJyYXk8U3RyaW5nPikgeyB9XG59Il19