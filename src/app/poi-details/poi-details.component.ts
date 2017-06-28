import { Component, Input, OnInit } from '@angular/core';
import { PoiService } from 'app/poi.service';
import { UsersService } from 'app/users/users.service';
import { User } from 'app/users/user/user';
import { Poi } from 'app/poi/poi';
import {Com} from 'app/comm';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'poi-details',
    templateUrl: './poi-details.component.html',
    styleUrls: ['./poi-details.component.css']
})

export class PoiDetailsComponent implements OnInit {
    poi: Poi;
    com: Com;
    user: User;
    poiComments;
    id: number;
    poiLoaded = false;
    userLoaded = false;
    commentLoaded=false;

    constructor(private poisService: PoiService,
        private usersService: UsersService,
        private route: ActivatedRoute,
        private router: Router) {
            this.com={};
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.loadPois(this.id);
        this.loadComments(this.id);
        this.com.poiId=this.id;
 
    }

    private loadPois(id) {
        this.poisService.getPoiId(id).subscribe(
            res => this.poi = res,
            error => { this.router.navigate(['not-found']) },
            () => {
            this.poiLoaded = true;
            this.loadUser(this.poi.userId);  
            }
        );
    }
    private loadComments(poiId) {
        this.poisService.getComments(poiId).subscribe(
            res => this.poiComments = res,
            Error => { var noComments = true },
            () => {
                this.commentLoaded=true;
            }
        )
    }
    private loadUser(poiId) {
        this.usersService.getUser(poiId).subscribe(
            res => this.user = res,
            Error => { console.log("error") },
            () => {
            this.userLoaded = true;
            this.com.name=this.user.name;
            }
        )
    }
    private newDesc(event) {
        this.poisService.updatePoi(this.id, event).subscribe(result => this.loadPois(this.id));
    }
    private newCom(event) {
        this.com.body=event.body;
        this.poisService.updateCom(this.com).subscribe(result => this.loadComments(this.id));
    }
    private deleteComment(event){
        this.poisService.deleteComments(event).subscribe(result => this.loadComments(this.id));
    }
    private newInfo(event){
        console.log("sssss");
        this.poisService.updatePoi(this.id, event).subscribe(result => this.loadPois(this.id));
    }
    
}
