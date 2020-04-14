import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // task użyty w add.component.html
  task: string;

  // emiter użyty
  @Output()
  emitTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.emitTask.emit(this.task);
    this.task = '';
  }

}
