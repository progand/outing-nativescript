"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var trip_1 = require("./trip");
var TripListService = (function () {
    function TripListService(http) {
        this.http = http;
    }
    TripListService.prototype.load = function () {
        return this.http.get(config_1.Config.apiUrl + "/models/trips?action=includeRelationships")
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var list = [];
            data.trips.forEach(function (trip) {
                list.push(new trip_1.Trip(trip.id, trip.name, trip.destination, trip.approvedTravellersCount, trip.partnersReqd));
            });
            return list;
        })
            .catch(this.handleErrors);
    };
    TripListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return TripListService;
}());
TripListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TripListService);
exports.TripListService = TripListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmlwLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixvQ0FBbUM7QUFDbkMsK0JBQThCO0FBRzlCLElBQWEsZUFBZTtJQUN4Qix5QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRW5DLDhCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRywyQ0FBMkMsQ0FBQzthQUM1RSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQy9HLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FFaUIsV0FBSTtHQURyQixlQUFlLENBb0IzQjtBQXBCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuL3RyaXBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyaXBMaXN0U2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcIi9tb2RlbHMvdHJpcHM/YWN0aW9uPWluY2x1ZGVSZWxhdGlvbnNoaXBzXCIpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGRhdGEudHJpcHMuZm9yRWFjaCgodHJpcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobmV3IFRyaXAodHJpcC5pZCwgdHJpcC5uYW1lLCB0cmlwLmRlc3RpbmF0aW9uLCB0cmlwLmFwcHJvdmVkVHJhdmVsbGVyc0NvdW50LCB0cmlwLnBhcnRuZXJzUmVxZCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn0iXX0=