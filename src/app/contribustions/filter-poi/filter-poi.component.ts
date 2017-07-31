import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User} from 'app/users/user/user';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'filter-poi',
  templateUrl: './filter-poi.component.html',
  styleUrls: ['./filter-poi.component.css']
})

export class FilterPoiComponent implements OnInit {

  private typePoi = ["Jardins", "Parcs"];
  private status = ["validé", "non validé"];
  filterForm: FormGroup;
  constructor(private dateFormatter: NgbDateParserFormatter,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.filterForm = this.fb.group({
      typespois: [''],
      userId: [''],
      postal_code: [''],
      add_date: [''],
      validateStatus:['']
    })
  }

  change(filterForm) {
    let ngbDate = this.filterForm.controls['add_date'].value;
    let isoDate = this.dateFormatter.format(ngbDate);
    this.filterForm.controls['add_date'].patchValue(isoDate);
    let newValue = filterForm.value;
    console.log("date", newValue);
    this.filter.emit(newValue);
  }
  reset(filterForm) {
    filterForm.reset();
    this.change(filterForm);
  }

  @Input() users;
  @Output() filter = new EventEmitter();
}

