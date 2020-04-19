import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // task użyty w add.component.html
  task: string;

  // emiter użyty

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  add() {
    const task: Task = ({ name: this.task, created: new Date() });
    this.tasksService.add(task);
    this.task = '';
  }

}
