"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_list_service_1 = require("../../shared/trip/trip-list.service");
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
        this.imageHeight = 219 * platform_1.screen.mainScreen.widthDIPs / 350;
        this.page.actionBar.title = "OutingTravel";
        // ToDo: remove line below
        //this.router.navigate(['/trips/239487a1-c482-4b2d-b227-04fe6dde539f']);
    }
    ListComponent.prototype.ngOnInit = function () {
        // ToDo: uncomment  
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFtRDtBQUNuRCxnQ0FBK0I7QUFFL0Isc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6Qyx5RUFBc0U7QUFRdEUsSUFBYSxhQUFhO0lBU3hCLHVCQUFvQixXQUE0QixFQUFVLElBQVUsRUFBVSxNQUFjO1FBQXhFLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUDVGLGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQWdCLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsR0FBRyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFHcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztRQUMzQywwQkFBMEI7UUFDMUIsd0VBQXdFO0lBQzFFLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0Usb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLE1BQWM7UUFBdEIsaUJBYUM7UUFiTyx1QkFBQSxFQUFBLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7YUFDcEIsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNwQixXQUFXO2lCQUNWLE1BQU0sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FB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L3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbVHJpcExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIGFsbFRyaXBzOiBBcnJheTxUcmlwPiA9IFtdO1xuICB2aXNpYmxlVHJpcHM6IEFycmF5PFRyaXA+ID0gW107XG4gIG1heEl0ZW1zID0gNjtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGxpc3RMb2FkZWQgPSBmYWxzZTtcbiAgaW1hZ2VIZWlnaHQgPSAyMTkgKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAzNTA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcExpc3RTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gXCJPdXRpbmdUcmF2ZWxcIjtcbiAgICAvLyBUb0RvOiByZW1vdmUgbGluZSBiZWxvd1xuICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdHJpcHMvMjM5NDg3YTEtYzQ4Mi00YjJkLWIyMjctMDRmZTZkZGU1MzlmJ10pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7ICBcbiAgICAvLyBUb0RvOiB1bmNvbW1lbnQgIFxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcmVmcmVzaChzaWxlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnRyaXBTZXJ2aWNlLmxvYWQoKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRUcmlwcyA9PiB7XG4gICAgICAgIGxvYWRlZFRyaXBzXG4gICAgICAgIC5maWx0ZXIodHJpcE9iamVjdCA9PiB0cmlwT2JqZWN0LmNvdmVyUGhvdG8uc2l6ZXMgJiYgdHJpcE9iamVjdC5jb3ZlclBob3RvLnNpemVzLmRlZmF1bHQpXG4gICAgICAgIC5mb3JFYWNoKCh0cmlwT2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5hbGxUcmlwcy5wdXNoKHRyaXBPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlVHJpcHMgPSB0aGlzLmFsbFRyaXBzLnNsaWNlKDAsIHRoaXMubWF4SXRlbXMpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICBzaG93TW9yZSgpe1xuICAgIHRoaXMubWF4SXRlbXMgKz0gNjtcbiAgICB0aGlzLnZpc2libGVUcmlwcyA9IHRoaXMuYWxsVHJpcHMuc2xpY2UoMCwgdGhpcy5tYXhJdGVtcyk7XG4gIH1cblxuICBvcGVuVHJpcChhcmdzKXtcbiAgICBjb25zdCB7aWR9ID0gdGhpcy52aXNpYmxlVHJpcHNbYXJncy5pbmRleF07XG4gICAgY29uc3Qgcm91dGUgPSBgL3RyaXBzLyR7aWR9YDtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm91dGVdKTtcbiAgfVxuXG4gIGdldFBob3RvKHBob3RvOiBhbnksIHNpemUgPSBcImRlZmF1bHRcIikge1xuICAgIGNvbnN0IHVybCA9IHBob3RvLnNpemVzICYmIHBob3RvLnNpemVzW3NpemVdIHx8IHBob3RvLnVybDtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgZGF0ZUludGVydmFsKHRyaXA6IGFueSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUodHJpcC5kYXRlU3RhcnQpO1xuICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHRyaXAuZGF0ZUVuZCk7XG4gXG4gICAgcmV0dXJuIGAke3N0YXJ0LnRvRGF0ZVN0cmluZygpfSAtICR7ZW5kLnRvRGF0ZVN0cmluZygpfWA7XG4gIH1cblxuICByZWZyZXNoTGlzdChhcmdzKSB7XG4gICAgbGV0IHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XG4gICAgdGhpcy50cmlwU2VydmljZS5sb2FkKClcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkVHJpcHMgPT4ge1xuICAgICAgICB0aGlzLmFsbFRyaXBzID0gW107XG4gICAgICAgIGxvYWRlZFRyaXBzLmZvckVhY2goKHRyaXBPYmplY3QpID0+IHsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5hbGxUcmlwcy5wdXNoKHRyaXBPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cbn0iXX0=