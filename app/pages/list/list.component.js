"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var trip_list_service_1 = require("../../shared/trip/trip-list.service");
var ListComponent = (function () {
    function ListComponent(tripService) {
        this.tripService = tripService;
        this.tripList = [];
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    ListComponent.prototype.refresh = function () {
        var _this = this;
        this.isLoading = true;
        this.tripService.load()
            .subscribe(function (loadedTrips) {
            loadedTrips.forEach(function (tripObject) {
                _this.tripList.unshift(tripObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.getPhoto = function (photo, size) {
        if (size === void 0) { size = "default"; }
        return photo.sizes && photo.sizes[size] || photo.url;
    };
    ListComponent.prototype.dateInterval = function (trip) {
        var start = new Date(trip.dateStart);
        var end = new Date(trip.dateEnd);
        return start.toDateString() + " - " + end.toDateString();
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [trip_list_service_1.TripListService]
    }),
    __metadata("design:paramtypes", [trip_list_service_1.TripListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSx5RUFBc0U7QUFTdEUsSUFBYSxhQUFhO0lBS3hCLHVCQUFvQixXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFKaEQsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRWlDLENBQUM7SUFFckQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7YUFDcEIsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNwQixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtnQkFDN0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBVSxFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsZ0JBQWdCO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLElBQVM7UUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUksS0FBSyxDQUFDLFlBQVksRUFBRSxXQUFNLEdBQUcsQ0FBQyxZQUFZLEVBQUksQ0FBQztJQUMzRCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztLQUM3QixDQUFDO3FDQU1pQyxtQ0FBZTtHQUxyQyxhQUFhLENBaUN6QjtBQWpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwXCI7XG5pbXBvcnQgeyBUcmlwTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidGltZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW1RyaXBMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRyaXBMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBsaXN0TG9hZGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcExpc3RTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudHJpcFNlcnZpY2UubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZFRyaXBzID0+IHtcbiAgICAgICAgbG9hZGVkVHJpcHMuZm9yRWFjaCgodHJpcE9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMudHJpcExpc3QudW5zaGlmdCh0cmlwT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFBob3RvKHBob3RvOiBhbnksIHNpemUgPSBcImRlZmF1bHRcIikge1xuICAgIHJldHVybiBwaG90by5zaXplcyAmJiBwaG90by5zaXplc1tzaXplXSB8fCBwaG90by51cmw7XG4gIH1cblxuICBkYXRlSW50ZXJ2YWwodHJpcDogYW55KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0cmlwLmRhdGVTdGFydCk7XG4gICAgY29uc3QgZW5kID0gbmV3IERhdGUodHJpcC5kYXRlRW5kKTtcblxuICAgIHJldHVybiBgJHtzdGFydC50b0RhdGVTdHJpbmcoKX0gLSAke2VuZC50b0RhdGVTdHJpbmcoKX1gO1xuICB9XG59Il19