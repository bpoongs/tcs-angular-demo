import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user-registration',
  templateUrl: './reactive-user-registration.component.html',
  styleUrls: ['./reactive-user-registration.component.css']
})
export class ReactiveUserRegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: [''],
      firstName: ['', [Validators.required, 
                        Validators.minLength(2), 
                        Validators.maxLength(10)]],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      acceptTerms: [false]
    });
  }

  onSubmit(){
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.registerForm.reset();
  }


}
