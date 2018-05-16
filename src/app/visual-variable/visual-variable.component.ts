import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import {ColumnNames} from '../interfaces/column-names-interface';
import {VALID_DATA_SCALE_ENUM} from '../shared/valid-data-scales';

@Component({
  selector: 'app-visual-variable',
  templateUrl: './visual-variable.component.html',
  styleUrls: ['./visual-variable.component.css']
})
export class VisualVariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Visual variable init for Title : " + this.title);
  }

  @Input()
  title : string = "Default Name" ;

  /** 
   * This set the datatype which can be accepted
   * by this visual variable. Other other data types will
   * be ignored. e.g. nominal . Type of each dropped data
   * will be checked and only matched type will be selected
   */
  @Input()
  acceptsDataType : VALID_DATA_SCALE_ENUM;

  @Output()
  valueSelected = new EventEmitter<ColumnNames>();

  //just to display name
  //could be reset when mutual exclusive with 
  //some other visual variable
  @Input()
  attributeSelected : string ;
  // transferData: Object = {id: 1, msg: 'Hello'};
  // receivedData: Array<any> = [];

  transferDataSuccess($event: any) {
    console.log($event.dragData);
    if($event.dragData.type ==VALID_DATA_SCALE_ENUM[this.acceptsDataType] ){
      this.attributeSelected = $event.dragData.column_name;
      this.valueSelected.emit($event.dragData);
    }
    

      // this.receivedData.push($event);
  }


}