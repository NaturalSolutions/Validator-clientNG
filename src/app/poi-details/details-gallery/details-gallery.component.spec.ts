import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGalleryComponent } from './details-gallery.component';

describe('DetailsGalleryComponent', () => {
  let component: DetailsGalleryComponent;
  let fixture: ComponentFixture<DetailsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
