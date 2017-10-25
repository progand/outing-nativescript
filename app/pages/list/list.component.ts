import { screen } from "tns-core-modules/platform";
import { Page } from "ui/page";
import { ScrollEventData } from "ui/scroll-view";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Trip } from "../../shared/trip/trip";
import { TripListService } from "../../shared/trip/trip-list.service";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: [TripListService]
})
export class ListComponent implements OnInit {
  @ViewChild("container") container: ElementRef;
  tripList: Array<Object> = [];
  isLoading = false;
  listLoaded = false;
  imageHeight = 234 * screen.mainScreen.widthDIPs / 360;
  imageStyle = `height: ${234 * screen.mainScreen.widthDIPs / 360}`;

  constructor(private tripService: TripListService, private page: Page) {
    this.page.actionBar.title = "OutingTravel";
  }

  ngOnInit() {
    this.refresh();
  }

  refresh(silent = false) {
    this.isLoading = true;
    this.tripService.load()
      .subscribe(loadedTrips => {
        loadedTrips.forEach((tripObject) => {
          this.tripList.push(tripObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
      });
  }

  getPhoto(photo: any, size = "default") {
    return photo.sizes && photo.sizes[size] || photo.url;
  }

  dateInterval(trip: any) {
    const start = new Date(trip.dateStart);
    const end = new Date(trip.dateEnd);
 
    return `${start.toDateString()} - ${end.toDateString()}`;
  }

  refreshList(args) {
    var pullRefresh = args.object;
    this.tripService.load()
      .subscribe(loadedTrips => {
        this.tripList = [];
        loadedTrips.forEach((tripObject) => {          
          this.tripList.push(tripObject);
        });
        pullRefresh.refreshing = false;
      });
  }
}