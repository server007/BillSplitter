import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  name="additionComponent";
  constructor() { }

  ngOnInit(): void {
  }
  containers:any[]=[];
  
  add() {
    this.containers.push(this.containers.length);
  }
}
