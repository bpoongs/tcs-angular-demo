import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
 
  counter: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  decrementCounter(){
    this.counter = Number(this.counter) - 1;
  }

  incrementCounter(){
    this.counter = Number(this.counter) + 1;
  }
}
