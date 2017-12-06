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
        this.router.navigate(['/trips/239487a1-c482-4b2d-b227-04fe6dde539f']);
    }
    ListComponent.prototype.ngOnInit = function () {
        // ToDo: uncomment  
        //this.refresh();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFtRDtBQUNuRCxnQ0FBK0I7QUFFL0Isc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6Qyx5RUFBc0U7QUFRdEUsSUFBYSxhQUFhO0lBU3hCLHVCQUFvQixXQUE0QixFQUFVLElBQVUsRUFBVSxNQUFjO1FBQXhFLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUDVGLGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQWdCLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsR0FBRyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFHcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztRQUMzQywwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxvQkFBb0I7UUFDcEIsaUJBQWlCO0lBQ25CLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsTUFBYztRQUF0QixpQkFhQztRQWJPLHVCQUFBLEVBQUEsY0FBYztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTthQUNwQixTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ3BCLFdBQVc7aUJBQ1YsTUFBTSxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFsRSxDQUFrRSxDQUFDO2lCQUN4RixPQUFPLENBQUMsVUFBQyxVQUFVO2dCQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNKLElBQUEscUNBQUUsQ0FBa0M7UUFDM0MsSUFBTSxLQUFLLEdBQUcsWUFBVSxFQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBVSxFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsZ0JBQWdCO1FBQ25DLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLElBQVM7UUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUksS0FBSyxDQUFDLFlBQVksRUFBRSxXQUFNLEdBQUcsQ0FBQyxZQUFZLEVBQUksQ0FBQztJQUMzRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQUk7UUFBaEIsaUJBVUM7UUFUQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO2FBQ3BCLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDcEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7Z0JBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDO0FBcEV5QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtnREFBQztBQURuQyxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1FBQ2hFLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7S0FDN0IsQ0FBQztxQ0FVaUMsbUNBQWUsRUFBZ0IsV0FBSSxFQUFrQixlQUFNO0dBVGpGLGFBQWEsQ0FxRXpCO0FBckVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInVpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcFwiO1xuaW1wb3J0IHsgVHJpcExpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAtbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtUcmlwTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgYWxsVHJpcHM6IEFycmF5PFRyaXA+ID0gW107XG4gIHZpc2libGVUcmlwczogQXJyYXk8VHJpcD4gPSBbXTtcbiAgbWF4SXRlbXMgPSA2O1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICBpbWFnZUhlaWdodCA9IDIxOSAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDM1MDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwTGlzdFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGUgPSBcIk91dGluZ1RyYXZlbFwiO1xuICAgIC8vIFRvRG86IHJlbW92ZSBsaW5lIGJlbG93XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdHJpcHMvMjM5NDg3YTEtYzQ4Mi00YjJkLWIyMjctMDRmZTZkZGU1MzlmJ10pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7ICBcbiAgICAvLyBUb0RvOiB1bmNvbW1lbnQgIFxuICAgIC8vdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZWZyZXNoKHNpbGVudCA9IGZhbHNlKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudHJpcFNlcnZpY2UubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZFRyaXBzID0+IHtcbiAgICAgICAgbG9hZGVkVHJpcHNcbiAgICAgICAgLmZpbHRlcih0cmlwT2JqZWN0ID0+IHRyaXBPYmplY3QuY292ZXJQaG90by5zaXplcyAmJiB0cmlwT2JqZWN0LmNvdmVyUGhvdG8uc2l6ZXMuZGVmYXVsdClcbiAgICAgICAgLmZvckVhY2goKHRyaXBPYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmFsbFRyaXBzLnB1c2godHJpcE9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpc2libGVUcmlwcyA9IHRoaXMuYWxsVHJpcHMuc2xpY2UoMCwgdGhpcy5tYXhJdGVtcyk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNob3dNb3JlKCl7XG4gICAgdGhpcy5tYXhJdGVtcyArPSA2O1xuICAgIHRoaXMudmlzaWJsZVRyaXBzID0gdGhpcy5hbGxUcmlwcy5zbGljZSgwLCB0aGlzLm1heEl0ZW1zKTtcbiAgfVxuXG4gIG9wZW5UcmlwKGFyZ3Mpe1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnZpc2libGVUcmlwc1thcmdzLmluZGV4XTtcbiAgICBjb25zdCByb3V0ZSA9IGAvdHJpcHMvJHtpZH1gO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZV0pO1xuICB9XG5cbiAgZ2V0UGhvdG8ocGhvdG86IGFueSwgc2l6ZSA9IFwiZGVmYXVsdFwiKSB7XG4gICAgY29uc3QgdXJsID0gcGhvdG8uc2l6ZXMgJiYgcGhvdG8uc2l6ZXNbc2l6ZV0gfHwgcGhvdG8udXJsO1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBkYXRlSW50ZXJ2YWwodHJpcDogYW55KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh0cmlwLmRhdGVTdGFydCk7XG4gICAgY29uc3QgZW5kID0gbmV3IERhdGUodHJpcC5kYXRlRW5kKTtcbiBcbiAgICByZXR1cm4gYCR7c3RhcnQudG9EYXRlU3RyaW5nKCl9IC0gJHtlbmQudG9EYXRlU3RyaW5nKCl9YDtcbiAgfVxuXG4gIHJlZnJlc2hMaXN0KGFyZ3MpIHtcbiAgICBsZXQgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcbiAgICB0aGlzLnRyaXBTZXJ2aWNlLmxvYWQoKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWRUcmlwcyA9PiB7XG4gICAgICAgIHRoaXMuYWxsVHJpcHMgPSBbXTtcbiAgICAgICAgbG9hZGVkVHJpcHMuZm9yRWFjaCgodHJpcE9iamVjdCkgPT4geyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmFsbFRyaXBzLnB1c2godHJpcE9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxufSJdfQ==