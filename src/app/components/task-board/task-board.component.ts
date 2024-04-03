import { Component, OnInit } from '@angular/core';
import { Task } from '../../types/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task | undefined;

constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(task: Task): void {
    this.taskService.addToBoard(task);
    this.loadTasks();
  }

  removeTask(task: Task): void {
    this.taskService.removeFromBoard(task.id);
    this.loadTasks();
  }

  editTask(task: Task): void {
    this.selectedTask = { ...task };
  }

  saveChanges(updatedTask: Task): void {
    this.taskService.updateTask(updatedTask);
    this.loadTasks();
    this.selectedTask = undefined;
  }
}
