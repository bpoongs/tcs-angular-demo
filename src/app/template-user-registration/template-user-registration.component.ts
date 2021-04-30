import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MustMatchDirective } from '../directives/must-match.directive'

@Component({
  selector: 'app-template-user-registration',
  templateUrl: './template-user-registration.component.html',
  styleUrls: ['./template-user-registration.component.css']
})
export class TemplateUserRegistrationComponent implements OnInit {

  model: any = {};

  onSubmit(userForm: NgForm) {
    console.log(userForm);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
