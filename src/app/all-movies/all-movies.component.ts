import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {
  contactMethods = [
    { id: 1, name: "email" },
    { id: 2, name: "email" },
    { id: 3, name: "email" },
    { id: 4, name: "email" }
  ]
  log(x) {
    console.log(x);
  }

  formSubmit(frm) {
    console.log(frm.value);
  }
}
