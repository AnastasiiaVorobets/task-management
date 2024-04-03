import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../types/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {
  @Input() editedTask!: Task;
  @Output() save = new EventEmitter<Task>();
  @Output() cancelEdit = new EventEmitter<void>();

  saveChanges(): void {
    this.save.emit(this.editedTask);
  }

  cancel(): void {
    this.cancelEdit.emit();
  }
}
