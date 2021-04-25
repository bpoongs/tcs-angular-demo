import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name: string = 'Batman';

  constructor() { }

  ngOnInit(): void {
  }

  alterName(){
    this.name = 'Spiderman';
  }


}

// binding - 4 types
// 1. string interpolation - one way property binding
// 2. [] - one way property binding
// 3. event binding - ()
// 4. two way property binding 