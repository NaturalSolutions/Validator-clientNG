import {Router,RouterModule} from '@angular/router';
import { ListPoisComponent } from './contribustions/list-pois/list-pois.component';
import { PoiDetailsComponent } from './poi-details/poi-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

    export const routing=RouterModule.forRoot([
       
      { path : 'contributions/:id',component: PoiDetailsComponent },
      { path : 'contributions',component:  ListPoisComponent },
     { path: 'not-found', component: PageNotFoundComponent },
	{ path: '**', redirectTo: 'not-found' }
           ])