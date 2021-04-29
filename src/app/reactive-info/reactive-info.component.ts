import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-info',
  templateUrl: './reactive-info.component.html',
  styleUrls: ['./reactive-info.component.css']
})
export class ReactiveInfoComponent implements OnInit {

  infoFormGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.infoFormGroup = new FormGroup({
      userName: new FormControl(),
      userContact: new FormControl()
    })
  }

  displayUser(){
    console.log(this.infoFormGroup.value);
  }
}
