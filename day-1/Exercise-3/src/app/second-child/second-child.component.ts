import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent {
  @Input() secondChildData: string = '';

  newChildData = 'Data from second child';

  changeData(): void {
    this.newChildData = 'Updated data from second child';
  }
}
