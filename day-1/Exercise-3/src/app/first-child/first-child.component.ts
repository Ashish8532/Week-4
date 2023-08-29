import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent {
  @Input() childData: string = '';

  firstChildData = 'Data from first child';

  changeData(): void {
    this.firstChildData = 'Updated data from first child';
  }
}
