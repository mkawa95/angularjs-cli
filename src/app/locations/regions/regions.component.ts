import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService} from 'ngx-spinner';
import { Router} from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import { LocationsService} from '../../services/locations.service';

// declaring variable $ for data tables
declare var $;

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: Array<any>;
  public num = 1;
  constructor(
      private   route: Router,
      private   spinner: NgxSpinnerService,
      private   locaionService: LocationsService,
      private toast: ToastrService,
  ) {
  }
  ngOnInit() {
    this.spinner.show();
  }

}
