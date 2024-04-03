import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'board', component: TaskBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
