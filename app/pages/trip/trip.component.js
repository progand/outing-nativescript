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
        this.tripService.loadOne('8885f501-ec58-4b0f-a755-0be26ca40af8')
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
        return "$" + trip.budgetFrom + " - " + trip.budgetTo;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFtRDtBQUNuRCxnQ0FBK0I7QUFFL0Isc0NBQXlFO0FBQ3pFLDBDQUFpRDtBQUNqRCwwRUFBd0U7QUFDeEUsa0NBQWUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLFVBQVUsRUFBMUQsQ0FBMEQsQ0FBQyxDQUFDO0FBRWhHLHlFQUFzRTtBQVF0RSxJQUFhLGFBQWE7SUFZeEIsdUJBQW9CLFdBQTRCLEVBQVUsSUFBVSxFQUFVLEtBQXFCO1FBQS9FLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVBuRyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxHQUFHLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxlQUFVLEdBQUcsYUFBVyxHQUFHLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUssQ0FBQztRQUVsRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxN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b250ZW50IjpbImltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xucmVnaXN0ZXJFbGVtZW50KFwiSW1hZ2VTd2lwZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWltYWdlLXN3aXBlL2ltYWdlLXN3aXBlXCIpLkltYWdlU3dpcGUpO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwXCI7XG5pbXBvcnQgeyBUcmlwTGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC1saXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdHJpcC90cmlwLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy90cmlwL3RyaXAtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3RyaXAvdHJpcC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW1RyaXBMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICB0cmlwSWQ6IFN0cmluZztcbiAgdHJpcDogVHJpcDtcbiAgaW1hZ2VzOiBBcnJheTxPYmplY3Q+O1xuICBtYXhJdGVtcyA9IDY7XG4gIGltYWdlSGVpZ2h0ID0gMjM0ICogc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMzYwO1xuICBpbWFnZVN0eWxlID0gYGhlaWdodDogJHsyMzQgKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAzNjB9YDtcbiAgXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBpc0xvYWRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJpcFNlcnZpY2U6IFRyaXBMaXN0U2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgKSB7ICAgIFxuICAgIHRoaXMudHJpcElkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudHJpcFNlcnZpY2UubG9hZE9uZSh0aGlzLnRyaXBJZClcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkVHJpcCA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YShsb2FkZWRUcmlwKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hUcmlwKGFyZ3MpIHtcbiAgICBsZXQgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcbiAgICB0aGlzLnRyaXBTZXJ2aWNlLmxvYWRPbmUoJzg4ODVmNTAxLWVjNTgtNGIwZi1hNzU1LTBiZTI2Y2E0MGFmOCcpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZFRyaXAgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEobG9hZGVkVHJpcCk7XG4gICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRGF0YSh0cmlwOiBUcmlwKXtcbiAgICB0aGlzLnRyaXAgPSB0cmlwO1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGUgPSB0aGlzLnRyaXAubmFtZTtcbiAgICB0aGlzLmltYWdlcyA9IHRoaXMudHJpcC5waG90b3MubWFwKHBob3RvID0+ICh7dXJsOiB0aGlzLmdldFBob3RvKHBob3RvKX0pKTtcbiAgfVxuXG4gIGdldFBob3RvKHBob3RvOiBhbnksIHNpemUgPSBcImRlZmF1bHRcIikge1xuICAgIGNvbnN0IHVybCA9IHBob3RvLnNpemVzICYmIHBob3RvLnNpemVzW3NpemVdIHx8IHBob3RvLnVybDtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgZGF0ZUludGVydmFsKHRyaXA6IFRyaXApIHtcbiAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHRyaXAuZGF0ZVN0YXJ0KTtcbiAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZSh0cmlwLmRhdGVFbmQpO1xuXG4gICAgcmV0dXJuIGAke3N0YXJ0LnRvRGF0ZVN0cmluZygpfSAtICR7ZW5kLnRvRGF0ZVN0cmluZygpfWA7XG4gIH1cblxuICBwYXJ0bmVyc0NvdW50KHRyaXA6IFRyaXApe1xuICAgIHJldHVybiBgJHt0cmlwLmFwcHJvdmVkVHJhdmVsbGVyc0NvdW50fS8ke3RyaXAucGFydG5lcnNSZXFkfSBBZHZlbnR1cmVyc2BcbiAgfVxuXG4gIHRhZ3ModHJpcDogVHJpcCl7XG4gICAgcmV0dXJuIHRyaXAudGFncy5qb2luKCcgJyk7XG4gIH1cblxuICBidWRnZXQodHJpcDogVHJpcCl7XG4gICAgcmV0dXJuIGAkJHt0cmlwLmJ1ZGdldEZyb219IC0gJHt0cmlwLmJ1ZGdldFRvfWBcbiAgfVxufSJdfQ==