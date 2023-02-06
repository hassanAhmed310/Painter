import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button'
import {MatIcon} from '@angular/material/icon'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'painter';
  colour = "green";
  private _polygon = 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)';
  clip= "polygon(0% 0%, 40% 60%, 60% 60%)";
  styleObject(): Object{
    return {
      background:this.colour,
    };
  }
}
