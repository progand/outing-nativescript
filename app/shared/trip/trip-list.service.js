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
        var _this = this;
        return this.http.get(config_1.Config.apiUrl + "/models/trips?action=includeRelationships")
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var list = [];
            var trips = _this.deserialize(data);
            trips.forEach(function (trip) {
                list.push(new trip_1.Trip(trip.id, trip.name, trip.destination, trip.approvedTravellersCount, trip.partnersReqd, trip.coverPhoto, trip.organiser, new Date(trip.dateStart), new Date(trip.dateEnd)));
            });
            return list;
        })
            .catch(this.handleErrors);
    };
    TripListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    TripListService.prototype.deserialize = function (data) {
        var _this = this;
        var trips = data.trips, photos = data.photos, users = data.users;
        var result = trips.map(function (item) {
            var organiserData = _this.getByValue(users, item.organiser);
            var organiser = Object.assign({}, organiserData, {
                photo: _this.getByValue(photos, organiserData.photo),
                photos: organiserData.photos.map(function (photoId) { return _this.getByValue(photos, photoId); })
            });
            var trip = Object.assign({}, item, {
                coverPhoto: _this.getByValue(photos, item.coverPhoto),
                photos: item.photos.map(function (photoId) { return _this.getByValue(photos, photoId); }),
                organiser: organiser
            });
            return trip;
        });
        return result;
    };
    TripListService.prototype.getByValue = function (collection, fieldValue, fieldName) {
        if (fieldName === void 0) { fieldName = 'id'; }
        return collection.find(function (item) { return item[fieldName] === fieldValue; });
    };
    return TripListService;
}());
TripListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TripListService);
exports.TripListService = TripListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmlwLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixvQ0FBbUM7QUFDbkMsK0JBQThCO0FBRzlCLElBQWEsZUFBZTtJQUN4Qix5QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRW5DLDhCQUFJLEdBQUo7UUFBQSxpQkFxQkM7UUFwQkcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsMkNBQTJDLENBQUM7YUFDNUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQ3pCLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLElBQVM7UUFBckIsaUJBaUJDO1FBaEJXLElBQUEsa0JBQUssRUFBRSxvQkFBTSxFQUFFLGtCQUFLLENBQVU7UUFDdEMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDekIsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdELElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRTtnQkFDL0MsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ25ELE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO2FBQ2hGLENBQUMsQ0FBQztZQUNILElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRTtnQkFDakMsVUFBVSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3BELE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO2dCQUNwRSxTQUFTLFdBQUE7YUFDWixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBZ0I7UUFBaEIsMEJBQUEsRUFBQSxnQkFBZ0I7UUFDL0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssVUFBVSxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQztBQXJEWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBRWlCLFdBQUk7R0FEckIsZUFBZSxDQXFEM0I7QUFyRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi90cmlwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmlwTGlzdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCIvbW9kZWxzL3RyaXBzP2FjdGlvbj1pbmNsdWRlUmVsYXRpb25zaGlwc1wiKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmlwcyA9IHRoaXMuZGVzZXJpYWxpemUoZGF0YSk7XG4gICAgICAgICAgICAgICAgdHJpcHMuZm9yRWFjaCgodHJpcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gobmV3IFRyaXAodHJpcC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaXAubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaXAuZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlwLmFwcHJvdmVkVHJhdmVsbGVyc0NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpcC5wYXJ0bmVyc1JlcWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlwLmNvdmVyUGhvdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlwLm9yZ2FuaXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHRyaXAuZGF0ZVN0YXJ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHRyaXAuZGF0ZUVuZCksXG4gICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGRhdGE6IGFueSkge1xuICAgICAgICBjb25zdCB7IHRyaXBzLCBwaG90b3MsIHVzZXJzIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0cmlwcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmdhbmlzZXJEYXRhID0gdGhpcy5nZXRCeVZhbHVlKHVzZXJzLCBpdGVtLm9yZ2FuaXNlcik7XG4gICAgICAgICAgICBjb25zdCBvcmdhbmlzZXIgPSBPYmplY3QuYXNzaWduKHt9LCBvcmdhbmlzZXJEYXRhLCB7XG4gICAgICAgICAgICAgICAgcGhvdG86IHRoaXMuZ2V0QnlWYWx1ZShwaG90b3MsIG9yZ2FuaXNlckRhdGEucGhvdG8pLFxuICAgICAgICAgICAgICAgIHBob3Rvczogb3JnYW5pc2VyRGF0YS5waG90b3MubWFwKHBob3RvSWQgPT4gdGhpcy5nZXRCeVZhbHVlKHBob3RvcywgcGhvdG9JZCkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRyaXAgPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgICAgY292ZXJQaG90bzogdGhpcy5nZXRCeVZhbHVlKHBob3RvcywgaXRlbS5jb3ZlclBob3RvKSxcbiAgICAgICAgICAgICAgICBwaG90b3M6IGl0ZW0ucGhvdG9zLm1hcChwaG90b0lkID0+IHRoaXMuZ2V0QnlWYWx1ZShwaG90b3MsIHBob3RvSWQpKSxcbiAgICAgICAgICAgICAgICBvcmdhbmlzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRyaXA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0QnlWYWx1ZShjb2xsZWN0aW9uLCBmaWVsZFZhbHVlLCBmaWVsZE5hbWUgPSAnaWQnKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtW2ZpZWxkTmFtZV0gPT09IGZpZWxkVmFsdWUpO1xuICAgIH1cbn0iXX0=