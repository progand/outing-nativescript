import { screen } from "tns-core-modules/platform";
import { Page } from "ui/page";
import { ScrollEventData } from "ui/scroll-view";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Trip } from "../../shared/trip/trip";
import { TripListService } from "../../shared/trip/trip-list.service";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh1", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
  selector: "list",
  templateUrl: "pages/trip/trip.html",
  styleUrls: ["pages/trip/trip-common.css", "pages/trip/trip.css"],
  providers: [TripListService]
})
export class TripComponent implements OnInit {
  @ViewChild("container") container: ElementRef;
  trip: Trip;
  maxItems = 6;
  isLoading = false;
  isLoaded = false;

  constructor(private tripService: TripListService, private page: Page) {
    this.page.actionBar.title = "OutingTravel - item";
  }

  ngOnInit() {
    this.refresh();
  }

  refresh(silent = false) {
    this.isLoading = true;
    this.tripService.loadOne('8885f501-ec58-4b0f-a755-0be26ca40af8')
      .subscribe(loadedTrip => {
        this.trip = loadedTrip;
        this.isLoading = false;
        this.isLoaded = true;console.dir(this.trip)
      });
  }

  getPhoto(photo: any, size = "default") {
    const url = photo.sizes && photo.sizes[size] || photo.url;
    return url;
  }

  dateInterval(trip: Trip) {
    const start = new Date(trip.dateStart);
    const end = new Date(trip.dateEnd);

    return `${start.toDateString()} - ${end.toDateString()}`;
  }

  refreshTrip(args) {
    let pullRefresh = args.object;
    this.tripService.loadOne('8885f501-ec58-4b0f-a755-0be26ca40af8')
      .subscribe(loadedTrip => {
        this.trip = loadedTrip;
        pullRefresh.refreshing = false;
      });
  }
}