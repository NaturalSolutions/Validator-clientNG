import {Router,RouterModule} from '@angular/router';

import { ListPoisComponent } from './list-pois/list-pois.component';


    export const routing=RouterModule.forRoot([
      { path : 'contributions',component:  ListPoisComponent },
       
           ])