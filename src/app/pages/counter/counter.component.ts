import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update(current => current + 1);
  }

  restBy(value: number){
    this.counter -= value;
    this.counterSignal.update(current => current - 1);

  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
