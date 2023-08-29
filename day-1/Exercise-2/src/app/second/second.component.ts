import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  numbers: number[] = [1, 2, 3 ,4, 5];

  average: number = 0;

calculateAverage() {
  let sum = 0;

  for (const element of this.numbers) {
    sum += element;
  }

  this.average = sum / 0; // logical error
}
}
