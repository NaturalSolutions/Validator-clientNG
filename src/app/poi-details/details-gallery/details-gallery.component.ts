import {Component,OnInit,Input } from '@angular/core';
import {NgxGalleryOptions,NgxGalleryImage,NgxGalleryAnimation} from 'ngx-gallery';
import {Poi} from 'app/poi/poi';
import { User } from 'app/users/user/user';

@Component({
  selector: 'details-gallery',
  templateUrl: './details-gallery.component.html',
  styleUrls: ['./details-gallery.component.css']
})
export class DetailsGalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  @Input() pois: Poi;
  @Input() user: User;

  ngOnInit() {
    this.galleryOptions = [{
      width: '970px',
      height: '600px',
      thumbnailsColumns: 5,
      imageArrowsAutoHide: true,
      "preview": false,
      imageAnimation: NgxGalleryAnimation.Slide
    }]
    this.galleryImages = [{
      small: this.pois.url_img1,
      medium: this.pois.url_img1,
    },
    {
      small: this.pois.url_img2,
      medium: this.pois.url_img2,
    },
    {
      small: this.pois.url_img3,
      medium: this.pois.url_img3,
    }
    ];
  }

  private addImg() {
    // this.poisService.createPoi(this.pp).subscribe(data => console.log(data));
    this.galleryImages.push({
      small: 'assets/img_poi/img40.jpg',
      medium: 'assets/img_poi/img40.jpg'
    });
  }

  private deleteImg() {
    this.galleryImages.splice(1, 1);
  }
}

