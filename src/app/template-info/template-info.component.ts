import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-info',
  templateUrl: './template-info.component.html',
  styleUrls: ['./template-info.component.css']
})
export class TemplateInfoComponent implements OnInit {

  userName: string;
  userContact: string;
  constructor() { }

  ngOnInit(): void {
  }

  displayUser(userForm: NgForm){
    console.log(userForm.value);
    console.log(userForm.status);
    console.log(userForm.errors);
   
  }
}
