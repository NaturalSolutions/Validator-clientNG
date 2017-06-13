import { Router, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account.component';
import { AuthGuard } from 'app/auth-guard.service'

export const userAccountRouting = RouterModule.forChild([

  {
    path: 'mon-compte',
    component: UserAccountComponent,
    canActivate: [AuthGuard]
  }
]);