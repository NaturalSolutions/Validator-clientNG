import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from 'app/users/user/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'filter-poi',
  templateUrl: './filter-poi.component.html',
  styleUrls: ['./filter-poi.component.css']
})

export class FilterPoiComponent implements OnInit {

  typePoi = ["Jardins", "Parcs"];
  filterForm: FormGroup;
  constructor(private dateFormatter: NgbDateParserFormatter,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.filterForm = this.fb.group({
      desc: [''],
      userId: [''],
      postal_code: [''],
      add_date: ['']
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

