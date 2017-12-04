"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var trip_list_service_1 = require("../../shared/trip/trip-list.service");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("PullToRefresh1", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var TripComponent = (function () {
    function TripComponent(tripService, page) {
        this.tripService = tripService;
        this.page = page;
        this.maxItems = 6;
        this.isLoading = false;
        this.isLoaded = false;
        this.page.actionBar.title = "OutingTravel - item";
    }
    TripComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    TripComponent.prototype.refresh = function (silent) {
        var _this = this;
        if (silent === void 0) { silent = false; }
        this.isLoading = true;
        this.tripService.loadOne('8885f501-ec58-4b0f-a755-0be26ca40af8')
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
    __metadata("design:paramtypes", [trip_list_service_1.TripListService, page_1.Page])
], TripComponent);
exports.TripComponent = TripComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGdDQUErQjtBQUUvQixzQ0FBeUU7QUFFekUseUVBQXNFO0FBQ3RFLDBFQUF3RTtBQUN4RSxrQ0FBZSxDQUFDLGdCQUFnQixFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVE3RixJQUFhLGFBQWE7SUFPeEIsdUJBQW9CLFdBQTRCLEVBQVUsSUFBVTtRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnBFLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHZixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUM7SUFDcEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxNQUFjO1FBQXRCLGlCQVFDO1FBUk8sdUJBQUEsRUFBQSxjQUFjO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHNDQUFzQyxDQUFDO2FBQzdELFNBQVMsQ0FBQyxVQUFBLFVBQVU7WUFDbkIsS0FBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7WUFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBVSxFQUFFLElBQWdCO1FBQWhCLHFCQUFBLEVBQUEsZ0JBQWdCO1FBQ25DLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLElBQVU7UUFDckIsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUksS0FBSyxDQUFDLFlBQVksRUFBRSxXQUFNLEdBQUcsQ0FBQyxZQUFZLEVBQUksQ0FBQztJQUMzRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQUk7UUFBaEIsaUJBT0M7UUFOQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHNDQUFzQyxDQUFDO2FBQzdELFNBQVMsQ0FBQyxVQUFBLFVBQVU7WUFDbkIsS0FBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7WUFDdkIsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDO0FBNUN5QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtnREFBQztBQURuQyxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1FBQ2hFLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7S0FDN0IsQ0FBQztxQ0FRaUMsbUNBQWUsRUFBZ0IsV0FBSTtHQVB6RCxhQUFhLENBNkN6QjtBQTdDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbnJlZ2lzdGVyRWxlbWVudChcIlB1bGxUb1JlZnJlc2gxXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiKS5QdWxsVG9SZWZyZXNoKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdHJpcC90cmlwLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy90cmlwL3RyaXAtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3RyaXAvdHJpcC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW1RyaXBMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICB0cmlwOiBUcmlwO1xuICBtYXhJdGVtcyA9IDY7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBpc0xvYWRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJpcFNlcnZpY2U6IFRyaXBMaXN0U2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IFwiT3V0aW5nVHJhdmVsIC0gaXRlbVwiO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZWZyZXNoKHNpbGVudCA9IGZhbHNlKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudHJpcFNlcnZpY2UubG9hZE9uZSgnODg4NWY1MDEtZWM1OC00YjBmLWE3NTUtMGJlMjZjYTQwYWY4JylcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkVHJpcCA9PiB7XG4gICAgICAgIHRoaXMudHJpcCA9IGxvYWRlZFRyaXA7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO2NvbnNvbGUuZGlyKHRoaXMudHJpcClcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0UGhvdG8ocGhvdG86IGFueSwgc2l6ZSA9IFwiZGVmYXVsdFwiKSB7XG4gICAgY29uc3QgdXJsID0gcGhvdG8uc2l6ZXMgJiYgcGhvdG8uc2l6ZXNbc2l6ZV0gfHwgcGhvdG8udXJsO1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBkYXRlSW50ZXJ2YWwodHJpcDogVHJpcCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUodHJpcC5kYXRlU3RhcnQpO1xuICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHRyaXAuZGF0ZUVuZCk7XG5cbiAgICByZXR1cm4gYCR7c3RhcnQudG9EYXRlU3RyaW5nKCl9IC0gJHtlbmQudG9EYXRlU3RyaW5nKCl9YDtcbiAgfVxuXG4gIHJlZnJlc2hUcmlwKGFyZ3MpIHtcbiAgICBsZXQgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcbiAgICB0aGlzLnRyaXBTZXJ2aWNlLmxvYWRPbmUoJzg4ODVmNTAxLWVjNTgtNGIwZi1hNzU1LTBiZTI2Y2E0MGFmOCcpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZFRyaXAgPT4ge1xuICAgICAgICB0aGlzLnRyaXAgPSBsb2FkZWRUcmlwO1xuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxufSJdfQ==