import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  data!: any[];

  constructor(private route: ActivatedRoute) {
    console.log("ProtectedComponent constructor");
  }

  ngOnInit() {
    this.data = this.route.snapshot.data['data'];
    console.log(this.data);
  }
}
