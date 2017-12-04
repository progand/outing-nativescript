import { screen } from "tns-core-modules/platform";
import { Page } from "ui/page";
import { ScrollEventData } from "ui/scroll-view";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
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
  allTrips: Array<Trip> = [];
  visibleTrips: Array<Trip> = [];
  maxItems = 6;
  isLoading = false;
  listLoaded = false;
  imageHeight = 234 * screen.mainScreen.widthDIPs / 360;
  imageStyle = `height: ${234 * screen.mainScreen.widthDIPs / 360}`;

  constructor(private tripService: TripListService, private page: Page, private router: Router) {
    this.page.actionBar.title = "OutingTravel";
  }

  ngOnInit() {
    this.refresh();
  }

  refresh(silent = false) {
    this.isLoading = true;
    this.tripService.load()
      .subscribe(loadedTrips => {
        loadedTrips
        .filter(tripObject => tripObject.coverPhoto.sizes && tripObject.coverPhoto.sizes.default)
        .forEach((tripObject) => {
          this.allTrips.push(tripObject);
        });
        this.visibleTrips = this.allTrips.slice(0, this.maxItems);
        this.isLoading = false;
        this.listLoaded = true;
      });
  }

  showMore(){
    this.maxItems += 6;
    this.visibleTrips = this.allTrips.slice(0, this.maxItems);
  }

  openTrip(args){
    const {id} = this.visibleTrips[args.index];
    const route = `/trips/${id}`;
    this.router.navigate([route]);
  }

  getPhoto(photo: any, size = "default") {
    const url = photo.sizes && photo.sizes[size] || photo.url;
    return url;
  }

  dateInterval(trip: any) {
    const start = new Date(trip.dateStart);
    const end = new Date(trip.dateEnd);
 
    return `${start.toDateString()} - ${end.toDateString()}`;
  }

  refreshList(args) {
    let pullRefresh = args.object;
    this.tripService.load()
      .subscribe(loadedTrips => {
        this.allTrips = [];
        loadedTrips.forEach((tripObject) => {          
          this.allTrips.push(tripObject);
        });
        pullRefresh.refreshing = false;
      });
  }
}