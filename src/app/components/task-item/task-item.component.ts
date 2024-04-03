import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../types/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<Task>();
  @Output() edit = new EventEmitter<Task>();

  constructor() { }

  onRemoveClick(): void {
    this.remove.emit(this.task);
  }

  onEditClick(): void {
    this.edit.emit(this.task);
  }
}
