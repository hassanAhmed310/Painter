import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {
  name!:string;
  color!:string;
  x_position!:number;
  y_position!:number;
  ngOnInit(): void {
    this.color = "white";
    this.x_position = 20;
    this.y_position = 150;
  }
}
