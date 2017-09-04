import { Router, RouterModule } from '@angular/router';
import { ListPoisComponent } from './contributions/list-pois/list-pois.component';
import { PoiDetailsComponent } from './poi-details/poi-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routing = RouterModule.forRoot([
 
  { path: 'contributions/:id', component: PoiDetailsComponent },
  { path: 'contributions', component: ListPoisComponent },
  
  { path: 'not-found', component: PageNotFoundComponent },
{ path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'not-found' },
  
])