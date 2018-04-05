import { Component, OnInit, Input } from '@angular/core';
// import {MapService} from '../services/map.service';
// import {DataproviderService} from '../services/dataprovider.service';

// import {ISupportedVisualizationModel} from '../shared/vis-model';
import {SUPPORTED_VISUALIZATIONS_ENUM} from '../shared/supported-maps-enum';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // listOfAttributes : string[];
  //display map-component only when user click one of the valid mapping options
  private displayChoroplethMap : boolean = false;
  // featuresTOMap : any;
  //user selects this on front page after uploading data
  public _selectedVisualization : SUPPORTED_VISUALIZATIONS_ENUM;

  // constructor(private _mapService : MapService,
  //             private _dataProviderService : DataproviderService) { }

  ngOnInit() {
  }

  /**
   * Update map view when this value is updated
   */
  @Input()
  set selectedVisualization(selectedValue : SUPPORTED_VISUALIZATIONS_ENUM){
  
  //  this.displayMapComponent = true;

    this._selectedVisualization = selectedValue;
    console.log("Selected visualization updated " + SUPPORTED_VISUALIZATIONS_ENUM[this._selectedVisualization]);

    //Draw choropleth map
    switch(selectedValue){
      case SUPPORTED_VISUALIZATIONS_ENUM.CHOROPLETH_MAP_MULTICOLOR:
         this.displayChoroplethMap = true;
        //do something here
        // this.drawChoroplethMap();
        return;
      case SUPPORTED_VISUALIZATIONS_ENUM.CHOROPLETH_MAP_SEQUENTIAL_COLOR:
        return;
      case SUPPORTED_VISUALIZATIONS_ENUM.GRADUATED_CIRCULAR_MAP:
        // this.drawGraduatedCircularMap();
        return;
      default :
        return;
    }

  }


  // drawGraduatedCircularMap(){
  //   this._mapService.plotBaicMap();
  // }
  

  // public updateMapDisplay(selectedValue : string){
  //   console.log('map update invoked' + selectedValue);
  //   this._mapService.updateMap(selectedValue);
  // }

}
