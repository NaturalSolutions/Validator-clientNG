import {Component,OnInit} from '@angular/core';
import {PoiComponent} from 'app/poi/poi.component';
import {PoiService} from 'app/poi.service'; 


@Component({
  selector: 'list-pois',
  templateUrl: './list-pois.component.html',
  styleUrls: [ './list-pois.component.css' ]  
})

export class ListPoisComponent implements OnInit {
    pois: any[];
    isLoading = true;
    currentPois;
    
    constructor(private poisService: PoiService) {    
    }

 ngOnInit(){
  this.loadPois();

    }

     private loadPois(filter?){
       
		 this.poisService.getPoi(filter).subscribe(res =>this.pois = res 
            ,null, 
            () => { this.isLoading = false; });
            
    }

     reloadPosts(filter){
        this.currentPois = null;
        
        this.loadPois(filter);
          
    }

    newFilter(event){
   
      this.reloadPosts(event);
    }
}
   
     