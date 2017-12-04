"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_list_service_1 = require("../../shared/trip/trip-list.service");
var TripComponent = (function () {
    function TripComponent(tripService, page, route) {
        this.tripService = tripService;
        this.page = page;
        this.route = route;
        this.maxItems = 6;
        this.isLoading = false;
        this.isLoaded = false;
        this.page.actionBar.title = "OutingTravel - item";
        this.tripId = this.route.snapshot.paramMap.get('id');
    }
    TripComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    TripComponent.prototype.refresh = function () {
        var _this = this;
        console.log(this.tripId);
        this.isLoading = true;
        this.tripService.loadOne(this.tripId)
            .subscribe(function (loadedTrip) {
            _this.trip = loadedTrip;
            _this.isLoading = false;
            _this.isLoaded = true;
            console.dir(_this.trip);
        });
    };
    TripComponent.prototype.getPhoto = function (photo, size) {
        if (size === void 0) { size = "default"; }
        var url = photo.sizes && photo.sizes[size] || photo.url;
        return url;
    };
    TripComponent.prototype.dateInterval = function (trip) {
        var start = new Date(trip.dateStart);
        var end = new Date(trip.dateEnd);
        return start.toDateString() + " - " + end.toDateString();
    };
    TripComponent.prototype.refreshTrip = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        this.tripService.loadOne('8885f501-ec58-4b0f-a755-0be26ca40af8')
            .subscribe(function (loadedTrip) {
            _this.trip = loadedTrip;
            pullRefresh.refreshing = false;
        });
    };
    return TripComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], TripComponent.prototype, "container", void 0);
TripComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/trip/trip.html",
        styleUrls: ["pages/trip/trip-common.css", "pages/trip/trip.css"],
        providers: [trip_list_service_1.TripListService]
    }),
    __metadata("design:paramtypes", [trip_list_service_1.TripListService, page_1.Page, router_1.ActivatedRoute])
], TripComponent);
exports.TripComponent = TripComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGdDQUErQjtBQUUvQixzQ0FBeUU7QUFDekUsMENBQWlEO0FBRWpELHlFQUFzRTtBQVF0RSxJQUFhLGFBQWE7SUFReEIsdUJBQW9CLFdBQTRCLEVBQVUsSUFBVSxFQUFVLEtBQXFCO1FBQS9FLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUpuRyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUFBLGlCQVFDO1FBUlUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNsQyxTQUFTLENBQUMsVUFBQSxVQUFVO1lBQ25CLEtBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEtBQVUsRUFBRSxJQUFnQjtRQUFoQixxQkFBQSxFQUFBLGdCQUFnQjtRQUNuQyxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxJQUFVO1FBQ3JCLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkMsTUFBTSxDQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUUsV0FBTSxHQUFHLENBQUMsWUFBWSxFQUFJLENBQUM7SUFDM0QsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFJO1FBQWhCLGlCQU9DO1FBTkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQzthQUM3RCxTQUFTLENBQUMsVUFBQSxVQUFVO1lBQ25CLEtBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQTlDeUI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7Z0RBQUM7QUFEbkMsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO0tBQzdCLENBQUM7cUNBU2lDLG1DQUFlLEVBQWdCLFdBQUksRUFBaUIsdUJBQWM7R0FSeEYsYUFBYSxDQStDekI7QUEvQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzY3JlZW4gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidWkvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwXCI7XG5pbXBvcnQgeyBUcmlwTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC1saXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdHJpcC90cmlwLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy90cmlwL3RyaXAtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3RyaXAvdHJpcC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW1RyaXBMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICB0cmlwSWQ6IFN0cmluZztcbiAgdHJpcDogVHJpcDtcbiAgbWF4SXRlbXMgPSA2O1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgaXNMb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwTGlzdFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGUgPSBcIk91dGluZ1RyYXZlbCAtIGl0ZW1cIjtcbiAgICB0aGlzLnRyaXBJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZWZyZXNoKCkge2NvbnNvbGUubG9nKHRoaXMudHJpcElkKVxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnRyaXBTZXJ2aWNlLmxvYWRPbmUodGhpcy50cmlwSWQpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZFRyaXAgPT4ge1xuICAgICAgICB0aGlzLnRyaXAgPSBsb2FkZWRUcmlwO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTsgY29uc29sZS5kaXIodGhpcy50cmlwKVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRQaG90byhwaG90bzogYW55LCBzaXplID0gXCJkZWZhdWx0XCIpIHtcbiAgICBjb25zdCB1cmwgPSBwaG90by5zaXplcyAmJiBwaG90by5zaXplc1tzaXplXSB8fCBwaG90by51cmw7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGRhdGVJbnRlcnZhbCh0cmlwOiBUcmlwKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0cmlwLmRhdGVTdGFydCk7XG4gICAgY29uc3QgZW5kID0gbmV3IERhdGUodHJpcC5kYXRlRW5kKTtcblxuICAgIHJldHVybiBgJHtzdGFydC50b0RhdGVTdHJpbmcoKX0gLSAke2VuZC50b0RhdGVTdHJpbmcoKX1gO1xuICB9XG5cbiAgcmVmcmVzaFRyaXAoYXJncykge1xuICAgIGxldCBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xuICAgIHRoaXMudHJpcFNlcnZpY2UubG9hZE9uZSgnODg4NWY1MDEtZWM1OC00YjBmLWE3NTUtMGJlMjZjYTQwYWY4JylcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkVHJpcCA9PiB7XG4gICAgICAgIHRoaXMudHJpcCA9IGxvYWRlZFRyaXA7XG4gICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG59Il19