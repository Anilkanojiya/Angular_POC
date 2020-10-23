import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userData=[
    { name: 'Mahesh',   age: '25' },
    { name: 'Shakti',   age: '23' },
    { name: 'Krishna',  age: '23' },
    { name: 'Radha',    age: '21' },
  ]

  isToggle: Boolean = false;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
