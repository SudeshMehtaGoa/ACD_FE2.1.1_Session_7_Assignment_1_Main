
/* This assignment intializes two variables in ngOnInit and shown in HTML using string interpolation */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  firstname: string;
  lastname: string;
  showNow: boolean;

  ngOnInit() {
    this.title = '';
    this.firstname = 'Sudesh';
    this.lastname = 'Mehta';
    this.showNow = false;
  }

  setTitle(fname, lname) {

    /* creating title using values from input field */
    var localFirstName: string;
    var localLastName: string;

    localFirstName = fname.value;
    localLastName = lname.value;
    this.title = localFirstName + " " + localLastName;

    this.showNow = true;

  }

  hideTitle() {
    this.showNow = false;
  }

}

