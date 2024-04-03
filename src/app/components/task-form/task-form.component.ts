import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../types/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() add = new EventEmitter<Task>();
  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      priority: ['low', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.add.emit(this.taskForm.value);
      this.taskForm.reset();
    }
  }
}
