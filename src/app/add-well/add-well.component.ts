import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';



@Component({
  selector: 'app-add-well',
  templateUrl: './add-well.component.html',
  styleUrls: ['./add-well.component.css']
})
export class AddWellComponent implements OnInit {
  
  wellData = {
    name:'',
    type:'',
    source:''
  }
  @Input() source: any;
  @Output() wellEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(data:any){

    let wellData = data.form.value;
    data.form.value={};
    wellData.source = this.source;
    this.wellData = wellData;
    this.wellEvent.emit(this.wellData)
  }
}
