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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFtRDtBQUNuRCxnQ0FBK0I7QUFFL0Isc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6Qyx5RUFBc0U7QUFRdEUsSUFBYSxhQUFhO0lBVXhCLHVCQUFvQixXQUE0QixFQUFVLElBQVUsRUFBVSxNQUFjO1FBQXhFLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUjVGLGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQWdCLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsR0FBRyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDdEQsZUFBVSxHQUFHLGFBQVcsR0FBRyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFLLENBQUM7UUFHaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLE1BQWM7UUFBdEIsaUJBYUM7UUFiTyx1QkFBQSxFQUFBLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7YUFDcEIsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNwQixXQUFXO2lCQUNWLE1BQU0sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBbEUsQ0FBa0UsQ0FBQztpQkFDeEYsT0FBTyxDQUFDLFVBQUMsVUFBVTtnQkFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLElBQUk7UUFDSixJQUFBLHFDQUFFLENBQWtDO1FBQzNDLElBQU0sS0FBSyxHQUFHLFlBQVUsRUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEtBQVUsRUFBRSxJQUFnQjtRQUFoQixxQkFBQSxFQUFBLGdCQUFnQjtRQUNuQyxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxJQUFTO1FBQ3BCLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkMsTUFBTSxDQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUUsV0FBTSxHQUFHLENBQUMsWUFBWSxFQUFJLENBQUM7SUFDM0QsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFJO1FBQWhCLGlCQVVDO1FBVEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTthQUNwQixTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVO2dCQUM3QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUNILFdBQVcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQW5FRCxJQW1FQztBQWxFeUI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7Z0RBQUM7QUFEbkMsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO0tBQzdCLENBQUM7cUNBV2lDLG1DQUFlLEVBQWdCLFdBQUksRUFBa0IsZUFBTTtHQVZqRixhQUFhLENBbUV6QjtBQW5FWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbVHJpcExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIGFsbFRyaXBzOiBBcnJheTxUcmlwPiA9IFtdO1xuICB2aXNpYmxlVHJpcHM6IEFycmF5PFRyaXA+ID0gW107XG4gIG1heEl0ZW1zID0gNjtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGxpc3RMb2FkZWQgPSBmYWxzZTtcbiAgaW1hZ2VIZWlnaHQgPSAyMzQgKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAzNjA7XG4gIGltYWdlU3R5bGUgPSBgaGVpZ2h0OiAkezIzNCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDM2MH1gO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJpcFNlcnZpY2U6IFRyaXBMaXN0U2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IFwiT3V0aW5nVHJhdmVsXCI7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHJlZnJlc2goc2lsZW50ID0gZmFsc2UpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy50cmlwU2VydmljZS5sb2FkKClcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkVHJpcHMgPT4ge1xuICAgICAgICBsb2FkZWRUcmlwc1xuICAgICAgICAuZmlsdGVyKHRyaXBPYmplY3QgPT4gdHJpcE9iamVjdC5jb3ZlclBob3RvLnNpemVzICYmIHRyaXBPYmplY3QuY292ZXJQaG90by5zaXplcy5kZWZhdWx0KVxuICAgICAgICAuZm9yRWFjaCgodHJpcE9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWxsVHJpcHMucHVzaCh0cmlwT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlzaWJsZVRyaXBzID0gdGhpcy5hbGxUcmlwcy5zbGljZSgwLCB0aGlzLm1heEl0ZW1zKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2hvd01vcmUoKXtcbiAgICB0aGlzLm1heEl0ZW1zICs9IDY7XG4gICAgdGhpcy52aXNpYmxlVHJpcHMgPSB0aGlzLmFsbFRyaXBzLnNsaWNlKDAsIHRoaXMubWF4SXRlbXMpO1xuICB9XG5cbiAgb3BlblRyaXAoYXJncyl7XG4gICAgY29uc3Qge2lkfSA9IHRoaXMudmlzaWJsZVRyaXBzW2FyZ3MuaW5kZXhdO1xuICAgIGNvbnN0IHJvdXRlID0gYC90cmlwcy8ke2lkfWA7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JvdXRlXSk7XG4gIH1cblxuICBnZXRQaG90byhwaG90bzogYW55LCBzaXplID0gXCJkZWZhdWx0XCIpIHtcbiAgICBjb25zdCB1cmwgPSBwaG90by5zaXplcyAmJiBwaG90by5zaXplc1tzaXplXSB8fCBwaG90by51cmw7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGRhdGVJbnRlcnZhbCh0cmlwOiBhbnkpIHtcbiAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHRyaXAuZGF0ZVN0YXJ0KTtcbiAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZSh0cmlwLmRhdGVFbmQpO1xuIFxuICAgIHJldHVybiBgJHtzdGFydC50b0RhdGVTdHJpbmcoKX0gLSAke2VuZC50b0RhdGVTdHJpbmcoKX1gO1xuICB9XG5cbiAgcmVmcmVzaExpc3QoYXJncykge1xuICAgIGxldCBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xuICAgIHRoaXMudHJpcFNlcnZpY2UubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZFRyaXBzID0+IHtcbiAgICAgICAgdGhpcy5hbGxUcmlwcyA9IFtdO1xuICAgICAgICBsb2FkZWRUcmlwcy5mb3JFYWNoKCh0cmlwT2JqZWN0KSA9PiB7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuYWxsVHJpcHMucHVzaCh0cmlwT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG59Il19