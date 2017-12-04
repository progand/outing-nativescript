"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_list_service_1 = require("../../shared/trip/trip-list.service");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var ListComponent = (function () {
    function ListComponent(tripService, page, router) {
        this.tripService = tripService;
        this.page = page;
        this.router = router;
        this.allTrips = [];
        this.visibleTrips = [];
        this.maxItems = 6;
        this.isLoading = false;
        this.listLoaded = false;
        this.imageHeight = 234 * platform_1.screen.mainScreen.widthDIPs / 360;
        this.imageStyle = "height: " + 234 * platform_1.screen.mainScreen.widthDIPs / 360;
        this.page.actionBar.title = "OutingTravel";
    }
    ListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    ListComponent.prototype.refresh = function (silent) {
        var _this = this;
        if (silent === void 0) { silent = false; }
        this.isLoading = true;
        this.tripService.load()
            .subscribe(function (loadedTrips) {
            loadedTrips
                .filter(function (tripObject) { return tripObject.coverPhoto.sizes && tripObject.coverPhoto.sizes.default; })
                .forEach(function (tripObject) {
                _this.allTrips.push(tripObject);
            });
            _this.visibleTrips = _this.allTrips.slice(0, _this.maxItems);
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.showMore = function () {
        this.maxItems += 6;
        this.visibleTrips = this.allTrips.slice(0, this.maxItems);
    };
    ListComponent.prototype.openTrip = function (args) {
        var id = this.visibleTrips[args.index].id;
        var route = "/trips/" + id;
        this.router.navigate([route]);
    };
    ListComponent.prototype.getPhoto = function (photo, size) {
        if (size === void 0) { size = "default"; }
        var url = photo.sizes && photo.sizes[size] || photo.url;
        return url;
    };
    ListComponent.prototype.dateInterval = function (trip) {
        var start = new Date(trip.dateStart);
        var end = new Date(trip.dateEnd);
        return start.toDateString() + " - " + end.toDateString();
    };
    ListComponent.prototype.refreshList = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        this.tripService.load()
            .subscribe(function (loadedTrips) {
            _this.allTrips = [];
            loadedTrips.forEach(function (tripObject) {
                _this.allTrips.push(tripObject);
            });
            pullRefresh.refreshing = false;
        });
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "container", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [trip_list_service_1.TripListService]
    }),
    __metadata("design:paramtypes", [trip_list_service_1.TripListService, page_1.Page, router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFtRDtBQUNuRCxnQ0FBK0I7QUFFL0Isc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6Qyx5RUFBc0U7QUFDdEUsMEVBQXdFO0FBQ3hFLGtDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVE1RixJQUFhLGFBQWE7SUFVeEIsdUJBQW9CLFdBQTRCLEVBQVUsSUFBVSxFQUFVLE1BQWM7UUFBeEUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSNUYsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBZ0IsRUFBRSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxHQUFHLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxlQUFVLEdBQUcsYUFBVyxHQUFHLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUssQ0FBQztRQUdoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsTUFBYztRQUF0QixpQkFhQztRQWJPLHVCQUFBLEVBQUEsY0FBYztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUks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S0FDN0IsQ0FBQztxQ0FXaUMsbUNBQWUsRUFBZ0IsV0FBSSxFQUFrQixlQUFNO0dBVmpGLGFBQWEsQ0FtRXpCO0FBbkVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInVpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcFwiO1xuaW1wb3J0IHsgVHJpcExpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAtbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xucmVnaXN0ZXJFbGVtZW50KFwiUHVsbFRvUmVmcmVzaFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtUcmlwTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgYWxsVHJpcHM6IEFycmF5PFRyaXA+ID0gW107XG4gIHZpc2libGVUcmlwczogQXJyYXk8VHJpcD4gPSBbXTtcbiAgbWF4SXRlbXMgPSA2O1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICBpbWFnZUhlaWdodCA9IDIzNCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDM2MDtcbiAgaW1hZ2VTdHlsZSA9IGBoZWlnaHQ6ICR7MjM0ICogc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMzYwfWA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcExpc3RTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gXCJPdXRpbmdUcmF2ZWxcIjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcmVmcmVzaChzaWxlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnRyaXBTZXJ2aWNlLmxvYWQoKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRUcmlwcyA9PiB7XG4gICAgICAgIGxvYWRlZFRyaXBzXG4gICAgICAgIC5maWx0ZXIodHJpcE9iamVjdCA9PiB0cmlwT2JqZWN0LmNvdmVyUGhvdG8uc2l6ZXMgJiYgdHJpcE9iamVjdC5jb3ZlclBob3RvLnNpemVzLmRlZmF1bHQpXG4gICAgICAgIC5mb3JFYWNoKCh0cmlwT2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5hbGxUcmlwcy5wdXNoKHRyaXBPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlVHJpcHMgPSB0aGlzLmFsbFRyaXBzLnNsaWNlKDAsIHRoaXMubWF4SXRlbXMpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICBzaG93TW9yZSgpe1xuICAgIHRoaXMubWF4SXRlbXMgKz0gNjtcbiAgICB0aGlzLnZpc2libGVUcmlwcyA9IHRoaXMuYWxsVHJpcHMuc2xpY2UoMCwgdGhpcy5tYXhJdGVtcyk7XG4gIH1cblxuICBvcGVuVHJpcChhcmdzKXtcbiAgICBjb25zdCB7aWR9ID0gdGhpcy52aXNpYmxlVHJpcHNbYXJncy5pbmRleF07XG4gICAgY29uc3Qgcm91dGUgPSBgL3RyaXBzLyR7aWR9YDtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm91dGVdKTtcbiAgfVxuXG4gIGdldFBob3RvKHBob3RvOiBhbnksIHNpemUgPSBcImRlZmF1bHRcIikge1xuICAgIGNvbnN0IHVybCA9IHBob3RvLnNpemVzICYmIHBob3RvLnNpemVzW3NpemVdIHx8IHBob3RvLnVybDtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgZGF0ZUludGVydmFsKHRyaXA6IGFueSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUodHJpcC5kYXRlU3RhcnQpO1xuICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHRyaXAuZGF0ZUVuZCk7XG4gXG4gICAgcmV0dXJuIGAke3N0YXJ0LnRvRGF0ZVN0cmluZygpfSAtICR7ZW5kLnRvRGF0ZVN0cmluZygpfWA7XG4gIH1cblxuICByZWZyZXNoTGlzdChhcmdzKSB7XG4gICAgbGV0IHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XG4gICAgdGhpcy50cmlwU2VydmljZS5sb2FkKClcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkVHJpcHMgPT4ge1xuICAgICAgICB0aGlzLmFsbFRyaXBzID0gW107XG4gICAgICAgIGxvYWRlZFRyaXBzLmZvckVhY2goKHRyaXBPYmplY3QpID0+IHsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5hbGxUcmlwcy5wdXNoKHRyaXBPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cbn0iXX0=