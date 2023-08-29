import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() name: string = '';
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  onRemoveClick(): void {
    this.remove.emit();
  }
}
