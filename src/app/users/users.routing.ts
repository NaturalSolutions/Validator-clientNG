import {Router,RouterModule} from '@angular/router';


import { ListUsersComponent } from './list-users/list-users.component';

  export const usersRouting=RouterModule.forChild([
     
        { path : 'utilisateurs',component: ListUsersComponent}
           ]);