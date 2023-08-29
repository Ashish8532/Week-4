import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  data!: string; 

  ngOnInit(): void {
    // this.data = 123; // Intentional type error: Assign a number to a string property
    this.data = "Ashish";
  }
}
