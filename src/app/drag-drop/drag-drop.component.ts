import { Component, OnInit } from '@angular/core';
import { CreateCompService } from '../create-comp.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  currentTime:any;
  constructor(private createComp:CreateCompService) { }

  ngOnInit(): void {
    
  }

  addToBody() {
    return false;
  }

  getTime(){
    const date = new Date();
    this.currentTime = date.getHours() + ":" + date.getMinutes();
  }
}
