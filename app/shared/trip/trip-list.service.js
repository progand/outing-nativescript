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
                list.push(new trip_1.Trip(trip.id, trip.name, trip.destination, trip.approvedTravellersCount, trip.partnersReqd, trip.coverPhoto));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmlwLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixvQ0FBbUM7QUFDbkMsK0JBQThCO0FBRzlCLElBQWEsZUFBZTtJQUN4Qix5QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRW5DLDhCQUFJLEdBQUo7UUFBQSxpQkFZQztRQVhHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLDJDQUEyQyxDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNoSSxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxJQUFTO1FBQXJCLGlCQWlCQztRQWhCVyxJQUFBLGtCQUFLLEVBQUUsb0JBQU0sRUFBRSxrQkFBSyxDQUFVO1FBQ3RDLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ3pCLElBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3RCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUU7Z0JBQy9DLEtBQUssRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQzthQUNoRixDQUFDLENBQUM7WUFDSCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUU7Z0JBQ2pDLFVBQVUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNwRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztnQkFDcEUsU0FBUyxXQUFBO2FBQ1osQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQWdCO1FBQWhCLDBCQUFBLEVBQUEsZ0JBQWdCO1FBQy9DLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFVBQVUsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUVpQixXQUFJO0dBRHJCLGVBQWUsQ0E0QzNCO0FBNUNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4vdHJpcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJpcExpc3RTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIFwiL21vZGVscy90cmlwcz9hY3Rpb249aW5jbHVkZVJlbGF0aW9uc2hpcHNcIilcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgdHJpcHMgPSB0aGlzLmRlc2VyaWFsaXplKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRyaXBzLmZvckVhY2goKHRyaXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5ldyBUcmlwKHRyaXAuaWQsIHRyaXAubmFtZSwgdHJpcC5kZXN0aW5hdGlvbiwgdHJpcC5hcHByb3ZlZFRyYXZlbGxlcnNDb3VudCwgdHJpcC5wYXJ0bmVyc1JlcWQsIHRyaXAuY292ZXJQaG90bykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGRhdGE6IGFueSkge1xuICAgICAgICBjb25zdCB7IHRyaXBzLCBwaG90b3MsIHVzZXJzIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0cmlwcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmdhbmlzZXJEYXRhID0gdGhpcy5nZXRCeVZhbHVlKHVzZXJzLCBpdGVtLm9yZ2FuaXNlcik7XG4gICAgICAgICAgICBjb25zdCBvcmdhbmlzZXIgPSBPYmplY3QuYXNzaWduKHt9LCBvcmdhbmlzZXJEYXRhLCB7XG4gICAgICAgICAgICAgICAgcGhvdG86IHRoaXMuZ2V0QnlWYWx1ZShwaG90b3MsIG9yZ2FuaXNlckRhdGEucGhvdG8pLFxuICAgICAgICAgICAgICAgIHBob3Rvczogb3JnYW5pc2VyRGF0YS5waG90b3MubWFwKHBob3RvSWQgPT4gdGhpcy5nZXRCeVZhbHVlKHBob3RvcywgcGhvdG9JZCkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRyaXAgPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgICAgY292ZXJQaG90bzogdGhpcy5nZXRCeVZhbHVlKHBob3RvcywgaXRlbS5jb3ZlclBob3RvKSxcbiAgICAgICAgICAgICAgICBwaG90b3M6IGl0ZW0ucGhvdG9zLm1hcChwaG90b0lkID0+IHRoaXMuZ2V0QnlWYWx1ZShwaG90b3MsIHBob3RvSWQpKSxcbiAgICAgICAgICAgICAgICBvcmdhbmlzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRyaXA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0QnlWYWx1ZShjb2xsZWN0aW9uLCBmaWVsZFZhbHVlLCBmaWVsZE5hbWUgPSAnaWQnKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtW2ZpZWxkTmFtZV0gPT09IGZpZWxkVmFsdWUpO1xuICAgIH1cbn0iXX0=