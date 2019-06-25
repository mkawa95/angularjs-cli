import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService} from 'ngx-spinner';
import { Router} from '@angular/router';
import { SchoolService} from '../services/school.service';

declare var $;

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schools: Array<any>;
  public num: number;

  constructor(
      private   route: Router,
      private   spinner: NgxSpinnerService,
      private   schoolService: SchoolService,
  ) {
  }

  ngOnInit() {
    this.spinner.show();
    this.schoolService.getAllPrimarySchools()
        .subscribe(
        response => {
          $(document).ready(function() {
            $('#myTable').DataTable();
          } );
          this.schools = response.schools;
          this.num = this.num += 1;
          console.log(this.schools);
          this.spinner.hide();
        }
    );
  }
  getPrimarySchools() {
    this.spinner.show();
    this.schoolService.getAllPrimarySchools().subscribe(
        response => {
          console.log(response);
          this.spinner.hide();
        }
    );
  }
}
