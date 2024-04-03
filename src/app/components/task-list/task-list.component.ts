import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../types/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks!: Task[];
  @Output() remove = new EventEmitter<Task>();
  @Output() edit = new EventEmitter<Task>();

  constructor() { }

  removeTask(task: Task): void {
    this.remove.emit(task);
  }

  editTask(task: Task): void {
    this.edit.emit(task);
  }
}
