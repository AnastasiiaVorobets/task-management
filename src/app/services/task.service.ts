import { Injectable } from '@angular/core';
import { Task } from '../types/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private boardKey = 'taskBoard';

  constructor() { }

  public addToBoard(task: Task): void {
    let taskBoard = this.getTaskBoard();
    task.id = this.generateId();
    taskBoard.push(task);
    this.saveTaskBoard(taskBoard);
  }

  public removeFromBoard(taskId: number): void {
    let taskBoard = this.getTaskBoard();
    taskBoard = taskBoard.filter(item => item.id !== taskId);
    this.saveTaskBoard(taskBoard);
  }

  public updateTask(updatedTask: Task): void {
    let taskBoard = this.getTaskBoard();
    const index = taskBoard.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      taskBoard[index] = updatedTask;
      this.saveTaskBoard(taskBoard);
    }
  }

  public getTasks(): Task[] {
    return this.getTaskBoard();
  }

  public clearBoard(): void {
    localStorage.removeItem(this.boardKey);
  }

  private generateId(): number {
    return new Date().getTime();
  }

  private getTaskBoard(): Task[] {
    const taskBoardString = localStorage.getItem(this.boardKey);
    return taskBoardString ? JSON.parse(taskBoardString) : [];
  }

  private saveTaskBoard(taskBoard: Task[]): void {
    localStorage.setItem(this.boardKey, JSON.stringify(taskBoard));
  }
}
