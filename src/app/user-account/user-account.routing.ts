import { Router, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account.component';
import { ProfileFromComponent } from './profile-from/profile-from.component';
import { AuthGuard } from 'app/auth-guard.service'

export const userAccountRouting = RouterModule.forChild([
 { path : 'mon-compte/:edit',component: ProfileFromComponent,canActivate: [AuthGuard] },
  {
    path: 'mon-compte',
    component: UserAccountComponent,
    canActivate: [AuthGuard]
  }
]);