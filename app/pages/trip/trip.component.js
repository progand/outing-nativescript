"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("ImageSwipe", function () { return require("nativescript-image-swipe/image-swipe").ImageSwipe; });
var trip_list_service_1 = require("../../shared/trip/trip-list.service");
var TripComponent = (function () {
    function TripComponent(tripService, page, route) {
        this.tripService = tripService;
        this.page = page;
        this.route = route;
        this.maxItems = 6;
        this.imageHeight = 234 * platform_1.screen.mainScreen.widthDIPs / 360;
        this.imageStyle = "height: " + 234 * platform_1.screen.mainScreen.widthDIPs / 360;
        this.isLoading = false;
        this.isLoaded = false;
        this.tripId = this.route.snapshot.paramMap.get('id');
    }
    TripComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    TripComponent.prototype.refresh = function () {
        var _this = this;
        this.isLoading = true;
        this.tripService.loadOne(this.tripId)
            .subscribe(function (loadedTrip) {
            _this.updateData(loadedTrip);
            _this.isLoading = false;
            _this.isLoaded = true;
        });
    };
    TripComponent.prototype.refreshTrip = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        this.tripService.loadOne(this.tripId)
            .subscribe(function (loadedTrip) {
            _this.updateData(loadedTrip);
            pullRefresh.refreshing = false;
        });
    };
    TripComponent.prototype.updateData = function (trip) {
        var _this = this;
        this.trip = trip;
        this.page.actionBar.title = this.trip.name;
        this.images = this.trip.photos.map(function (photo) { return ({ url: _this.getPhoto(photo) }); });
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
    TripComponent.prototype.partnersCount = function (trip) {
        return trip.approvedTravellersCount + "/" + trip.partnersReqd + " Adventurers";
    };
    TripComponent.prototype.tags = function (trip) {
        return trip.tags.join(' ');
    };
    TripComponent.prototype.budget = function (trip) {
        return "\u00A5" + trip.budgetFrom + " - " + trip.budgetTo;
    };
    TripComponent.prototype.travellerInfo = function (traveller) {
        if (traveller.coorganizer) {
            return 'Organiser!';
        }
        else if (traveller.approved) {
            return 'Approved';
        }
        return "Pending...";
    };
    TripComponent.prototype.travellerStyle = function (traveller) {
        if (traveller.coorganizer) {
            return 'color: #337ab7';
        }
        else if (traveller.approved) {
            return 'color: #3c763d';
        }
        return 'color: #9B9B9B';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFtRDtBQUNuRCxnQ0FBK0I7QUFFL0Isc0NBQXlFO0FBQ3pFLDBDQUFpRDtBQUNqRCwwRUFBd0U7QUFDeEUsa0NBQWUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLFVBQVUsRUFBMUQsQ0FBMEQsQ0FBQyxDQUFDO0FBRWhHLHlFQUFzRTtBQVF0RSxJQUFhLGFBQWE7SUFZeEIsdUJBQW9CLFdBQTRCLEVBQVUsSUFBVSxFQUFVLEtBQXFCO1FBQS9FLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVBuRyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxHQUFHLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxlQUFVLEdBQUcsYUFBVyxHQUFHLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUssQ0FBQztRQUVsRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxN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QyxDQUFBLENBQUM7WUFDeEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDN0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQzFCLENBQUM7UUFDRCxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXJGRCxJQXFGQztBQXBGeUI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7Z0RBQUM7QUFEbkMsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO0tBQzdCLENBQUM7cUNBYWlDLG1DQUFlLEVBQWdCLFdBQUksRUFBaUIsdUJBQWM7R0FaeEYsYUFBYSxDQXFGekI7QUFyRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzY3JlZW4gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidWkvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbnJlZ2lzdGVyRWxlbWVudChcIkltYWdlU3dpcGVcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1pbWFnZS1zd2lwZS9pbWFnZS1zd2lwZVwiKS5JbWFnZVN3aXBlKTtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcFwiO1xuaW1wb3J0IHsgVHJpcExpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAtbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3RyaXAvdHJpcC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdHJpcC90cmlwLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy90cmlwL3RyaXAuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtUcmlwTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFRyaXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgdHJpcElkOiBTdHJpbmc7XG4gIHRyaXA6IFRyaXA7XG4gIGltYWdlczogQXJyYXk8T2JqZWN0PjtcbiAgbWF4SXRlbXMgPSA2O1xuICBpbWFnZUhlaWdodCA9IDIzNCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDM2MDtcbiAgaW1hZ2VTdHlsZSA9IGBoZWlnaHQ6ICR7MjM0ICogc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMzYwfWA7XG4gIFxuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgaXNMb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwTGlzdFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICkgeyAgICBcbiAgICB0aGlzLnRyaXBJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnRyaXBTZXJ2aWNlLmxvYWRPbmUodGhpcy50cmlwSWQpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZFRyaXAgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEobG9hZGVkVHJpcCk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICByZWZyZXNoVHJpcChhcmdzKSB7XG4gICAgbGV0IHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XG4gICAgdGhpcy50cmlwU2VydmljZS5sb2FkT25lKHRoaXMudHJpcElkKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRUcmlwID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKGxvYWRlZFRyaXApO1xuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEodHJpcDogVHJpcCl7XG4gICAgdGhpcy50cmlwID0gdHJpcDtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gdGhpcy50cmlwLm5hbWU7XG4gICAgdGhpcy5pbWFnZXMgPSB0aGlzLnRyaXAucGhvdG9zLm1hcChwaG90byA9PiAoe3VybDogdGhpcy5nZXRQaG90byhwaG90byl9KSk7XG4gIH1cblxuICBnZXRQaG90byhwaG90bzogYW55LCBzaXplID0gXCJkZWZhdWx0XCIpIHtcbiAgICBjb25zdCB1cmwgPSBwaG90by5zaXplcyAmJiBwaG90by5zaXplc1tzaXplXSB8fCBwaG90by51cmw7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGRhdGVJbnRlcnZhbCh0cmlwOiBUcmlwKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0cmlwLmRhdGVTdGFydCk7XG4gICAgY29uc3QgZW5kID0gbmV3IERhdGUodHJpcC5kYXRlRW5kKTtcblxuICAgIHJldHVybiBgJHtzdGFydC50b0RhdGVTdHJpbmcoKX0gLSAke2VuZC50b0RhdGVTdHJpbmcoKX1gO1xuICB9XG5cbiAgcGFydG5lcnNDb3VudCh0cmlwOiBUcmlwKXtcbiAgICByZXR1cm4gYCR7dHJpcC5hcHByb3ZlZFRyYXZlbGxlcnNDb3VudH0vJHt0cmlwLnBhcnRuZXJzUmVxZH0gQWR2ZW50dXJlcnNgXG4gIH1cblxuICB0YWdzKHRyaXA6IFRyaXApe1xuICAgIHJldHVybiB0cmlwLnRhZ3Muam9pbignICcpO1xuICB9XG5cbiAgYnVkZ2V0KHRyaXA6IFRyaXApe1xuICAgIHJldHVybiBgwqUke3RyaXAuYnVkZ2V0RnJvbX0gLSAke3RyaXAuYnVkZ2V0VG99YFxuICB9XG5cbiAgdHJhdmVsbGVySW5mbyh0cmF2ZWxsZXI6IGFueSl7XG4gICAgaWYodHJhdmVsbGVyLmNvb3JnYW5pemVyKXtcbiAgICAgIHJldHVybiAnT3JnYW5pc2VyISc7XG4gICAgfSBlbHNlIGlmICh0cmF2ZWxsZXIuYXBwcm92ZWQpe1xuICAgICAgcmV0dXJuICdBcHByb3ZlZCc7XG4gICAgfVxuICAgIHJldHVybiBcIlBlbmRpbmcuLi5cIjtcbiAgfVxuICB0cmF2ZWxsZXJTdHlsZSh0cmF2ZWxsZXI6IGFueSl7XG4gICAgaWYodHJhdmVsbGVyLmNvb3JnYW5pemVyKXtcbiAgICAgIHJldHVybiAnY29sb3I6ICMzMzdhYjcnO1xuICAgIH0gZWxzZSBpZiAodHJhdmVsbGVyLmFwcHJvdmVkKXtcbiAgICAgIHJldHVybiAnY29sb3I6ICMzYzc2M2QnO1xuICAgIH0gXG4gICAgcmV0dXJuICdjb2xvcjogIzlCOUI5Qic7XG4gIH1cbn0iXX0=