"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var trip_list_service_1 = require("../../shared/trip/trip-list.service");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var ListComponent = (function () {
    function ListComponent(tripService, page) {
        this.tripService = tripService;
        this.page = page;
        this.tripList = [];
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
            loadedTrips.forEach(function (tripObject) {
                _this.tripList.push(tripObject);
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
    ListComponent.prototype.refreshList = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        this.tripService.load()
            .subscribe(function (loadedTrips) {
            _this.tripList = [];
            loadedTrips.forEach(function (tripObject) {
                _this.tripList.push(tripObject);
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
    __metadata("design:paramtypes", [trip_list_service_1.TripListService, page_1.Page])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFtRDtBQUNuRCxnQ0FBK0I7QUFFL0Isc0NBQXlFO0FBRXpFLHlFQUFzRTtBQUN0RSwwRUFBd0U7QUFDeEUsa0NBQWUsQ0FBQyxlQUFlLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLGFBQWEsRUFBbkQsQ0FBbUQsQ0FBQyxDQUFDO0FBUTVGLElBQWEsYUFBYTtJQVF4Qix1QkFBb0IsV0FBNEIsRUFBVSxJQUFVO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFOcEUsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsR0FBRyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDdEQsZUFBVSxHQUFHLGFBQVcsR0FBRyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFLLENBQUM7UUFHaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLE1BQWM7UUFBdEIsaUJBVUM7UUFWTyx1QkFBQSxFQUFBLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7YUFDcEIsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNwQixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtnQkFDN0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBVSxFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsZ0JBQWdCO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLElBQVM7UUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUksS0FBSyxDQUFDLFlBQVksRUFBRSxXQUFNLEdBQUcsQ0FBQyxZQUFZLEVBQUksQ0FBQztJQUMzRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQUk7UUFBaEIsaUJBVUM7UUFUQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO2FBQ3BCLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDcEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7Z0JBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBakR5QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtnREFBQztBQURuQyxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1FBQ2hFLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7S0FDN0IsQ0FBQztxQ0FTaUMsbUNBQWUsRUFBZ0IsV0FBSTtHQVJ6RCxhQUFhLENBa0R6QjtBQWxEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbnJlZ2lzdGVyRWxlbWVudChcIlB1bGxUb1JlZnJlc2hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCIpLlB1bGxUb1JlZnJlc2gpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbVHJpcExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIHRyaXBMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBsaXN0TG9hZGVkID0gZmFsc2U7XG4gIGltYWdlSGVpZ2h0ID0gMjM0ICogc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMzYwO1xuICBpbWFnZVN0eWxlID0gYGhlaWdodDogJHsyMzQgKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAzNjB9YDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwTGlzdFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGUgPSBcIk91dGluZ1RyYXZlbFwiO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZWZyZXNoKHNpbGVudCA9IGZhbHNlKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudHJpcFNlcnZpY2UubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZFRyaXBzID0+IHtcbiAgICAgICAgbG9hZGVkVHJpcHMuZm9yRWFjaCgodHJpcE9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMudHJpcExpc3QucHVzaCh0cmlwT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFBob3RvKHBob3RvOiBhbnksIHNpemUgPSBcImRlZmF1bHRcIikge1xuICAgIHJldHVybiBwaG90by5zaXplcyAmJiBwaG90by5zaXplc1tzaXplXSB8fCBwaG90by51cmw7XG4gIH1cblxuICBkYXRlSW50ZXJ2YWwodHJpcDogYW55KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0cmlwLmRhdGVTdGFydCk7XG4gICAgY29uc3QgZW5kID0gbmV3IERhdGUodHJpcC5kYXRlRW5kKTtcbiBcbiAgICByZXR1cm4gYCR7c3RhcnQudG9EYXRlU3RyaW5nKCl9IC0gJHtlbmQudG9EYXRlU3RyaW5nKCl9YDtcbiAgfVxuXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcbiAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcbiAgICB0aGlzLnRyaXBTZXJ2aWNlLmxvYWQoKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRUcmlwcyA9PiB7XG4gICAgICAgIHRoaXMudHJpcExpc3QgPSBbXTtcbiAgICAgICAgbG9hZGVkVHJpcHMuZm9yRWFjaCgodHJpcE9iamVjdCkgPT4geyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnRyaXBMaXN0LnB1c2godHJpcE9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxufSJdfQ==