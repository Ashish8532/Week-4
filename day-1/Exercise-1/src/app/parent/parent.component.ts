import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SubChildComponent } from '../sub-child/sub-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
names: string[] = ['Ashish', 'Alok', 'Abhiraj'];

@ViewChild(SubChildComponent) child: any;

removeName(index: number): void {
    this.names.splice(index, 1);
  }

  message:string = '';
  
  ngAfterViewInit() {
    this.message = this.child.message
  }
}
