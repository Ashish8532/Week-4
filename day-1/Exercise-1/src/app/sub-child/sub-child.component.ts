import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})
export class SubChildComponent {

  message = 'Hello from sub-child by using View Child!';
}
