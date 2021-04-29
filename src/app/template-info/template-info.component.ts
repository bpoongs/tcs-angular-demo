import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-info',
  templateUrl: './template-info.component.html',
  styleUrls: ['./template-info.component.css']
})
export class TemplateInfoComponent implements OnInit {

  userName: string ='Test';
  userContact: string ='123456';
  constructor() { }

  ngOnInit(): void {
  }

  displayUser(userForm: NgForm){
    console.log(userForm.value);
    
  }
}
