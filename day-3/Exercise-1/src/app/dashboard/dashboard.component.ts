import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data!: any[];

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    console.log('dashboard');
  }

  ngOnInit() {
    this.data = this.route.snapshot.data['data'];
  }


  
}
