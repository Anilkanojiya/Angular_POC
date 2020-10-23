import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
testdata:any;
source:any;
  wellList = [
    { name : 'TestRLSWell01', type:'rls' , source:'10001' },
    { name : 'TestESPWell01', type:'esp' , source:'10001' },
    { name : 'TestRLSWell01', type:'rls' , source:'10001' },
    { name : 'TestRLSWell01', type:'rls' , source:'10001' },
    { name : 'TestESPWell01', type:'esp' , source:'10001' },
    { name : 'TestRLSWell01', type:'rls' , source:'10001' },
    { name : 'TestRLSWell01', type:'rls' , source:'1010101' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openAddWell(source){
    this.source = source;
  }

  recieveWellData($event){
    this.wellList.push($event)
  }

  getTypeStyle(type){
    switch (type) {
      case 'rls':
        return 'green';
      case 'esp':
        return 'pink';
    }









































































  }
}
