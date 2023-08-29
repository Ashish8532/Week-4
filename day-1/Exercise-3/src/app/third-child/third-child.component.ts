import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent {
  @Input() thirdChildData: string = '';
}
