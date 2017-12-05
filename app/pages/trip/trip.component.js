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
    TripComponent.prototype.refreshTrip = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        this.tripService.loadOne('8885f501-ec58-4b0f-a755-0be26ca40af8')
            .subscribe(function (loadedTrip) {
            _this.updateData(loadedTrip);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFtRDtBQUNuRCxnQ0FBK0I7QUFFL0Isc0NBQXlFO0FBQ3pFLDBDQUFpRDtBQUNqRCwwRUFBd0U7QUFDeEUsa0NBQWUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLFVBQVUsRUFBMUQsQ0FBMEQsQ0FBQyxDQUFDO0FBRWhHLHlFQUFzRTtBQVF0RSxJQUFhLGFBQWE7SUFZeEIsdUJBQW9CLFdBQTRCLEVBQVUsSUFBVSxFQUFVLEtBQXFCO1FBQS9FLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVBuRyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxHQUFHLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxlQUFVLEdBQUcsYUFBVyxHQUFHLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUssQ0FBQztRQUVsRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbEMsU0FBUyxDQUFDLFVBQUEsVUFBVTtZQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxJQUFVO1FBQXJCLGlCQUlDO1FBSEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBVSxFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsZ0JBQWdCO1FBQ25DLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLElBQVU7UUFDckIsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUksS0FBSyxDQUFDLFlBQVksRUFBRSxXQUFNLEdBQUcsQ0FBQyxZQUFZLEVBQUksQ0FBQztJQUMzRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQUk7UUFBaEIsaUJBT0M7UUFOQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHNDQUFzQyxDQUFDO2FBQzdELFNBQVMsQ0FBQyxVQUFBLFVBQVU7WUFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QixXQUFXLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF2RHlCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2dEQUFDO0FBRG5DLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztLQUM3QixDQUFDO3FDQWFpQyxtQ0FBZSxFQUFnQixXQUFJLEVBQWlCLHVCQUFjO0dBWnhGLGFBQWEsQ0F3RHpCO0FBeERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInVpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5yZWdpc3RlckVsZW1lbnQoXCJJbWFnZVN3aXBlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtaW1hZ2Utc3dpcGUvaW1hZ2Utc3dpcGVcIikuSW1hZ2VTd2lwZSk7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy90cmlwL3RyaXAuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3RyaXAvdHJpcC1jb21tb24uY3NzXCIsIFwicGFnZXMvdHJpcC90cmlwLmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbVHJpcExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBUcmlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIHRyaXBJZDogU3RyaW5nO1xuICB0cmlwOiBUcmlwO1xuICBpbWFnZXM6IEFycmF5PE9iamVjdD47XG4gIG1heEl0ZW1zID0gNjtcbiAgaW1hZ2VIZWlnaHQgPSAyMzQgKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAzNjA7XG4gIGltYWdlU3R5bGUgPSBgaGVpZ2h0OiAkezIzNCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDM2MH1gO1xuICBcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGlzTG9hZGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcExpc3RTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCApIHsgICAgXG4gICAgdGhpcy50cmlwSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy50cmlwU2VydmljZS5sb2FkT25lKHRoaXMudHJpcElkKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRUcmlwID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKGxvYWRlZFRyaXApO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRGF0YSh0cmlwOiBUcmlwKXtcbiAgICB0aGlzLnRyaXAgPSB0cmlwO1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGUgPSB0aGlzLnRyaXAubmFtZTtcbiAgICB0aGlzLmltYWdlcyA9IHRoaXMudHJpcC5waG90b3MubWFwKHBob3RvID0+ICh7dXJsOiB0aGlzLmdldFBob3RvKHBob3RvKX0pKTtcbiAgfVxuXG4gIGdldFBob3RvKHBob3RvOiBhbnksIHNpemUgPSBcImRlZmF1bHRcIikge1xuICAgIGNvbnN0IHVybCA9IHBob3RvLnNpemVzICYmIHBob3RvLnNpemVzW3NpemVdIHx8IHBob3RvLnVybDtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgZGF0ZUludGVydmFsKHRyaXA6IFRyaXApIHtcbiAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHRyaXAuZGF0ZVN0YXJ0KTtcbiAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZSh0cmlwLmRhdGVFbmQpO1xuXG4gICAgcmV0dXJuIGAke3N0YXJ0LnRvRGF0ZVN0cmluZygpfSAtICR7ZW5kLnRvRGF0ZVN0cmluZygpfWA7XG4gIH1cblxuICByZWZyZXNoVHJpcChhcmdzKSB7XG4gICAgbGV0IHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XG4gICAgdGhpcy50cmlwU2VydmljZS5sb2FkT25lKCc4ODg1ZjUwMS1lYzU4LTRiMGYtYTc1NS0wYmUyNmNhNDBhZjgnKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRUcmlwID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKGxvYWRlZFRyaXApO1xuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxufSJdfQ==