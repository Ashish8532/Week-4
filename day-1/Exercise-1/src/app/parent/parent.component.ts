import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
names: string[] = ['Ashish', 'Alok', 'Abhiraj'];

removeName(index: number): void {
    this.names.splice(index, 1);
  }
}
