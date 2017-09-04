import { Component,Input, OnChanges} from '@angular/core';
import { User } from 'app/users/user/user';
import * as _ from 'lodash';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnChanges {

usersSorted: User[];

  constructor() { }

  ngOnChanges() {

    if (this.userData) {

    this.usersSorted = _.orderBy(this.userData, function(u){return Number(u.score)}, ['desc']);
    this.usersSorted =_.take(this.usersSorted,5);
    }
  }

@Input() userData : User[];
}
