import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundColor = environment.headerBackgroundColor;
  // constructor(router: Router){

  // }
//   navigateToHome = function () {
//   this.router.navigate(['/trending']);
// }

}
