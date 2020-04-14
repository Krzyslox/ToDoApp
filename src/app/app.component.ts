import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksList: Array<string> = [];
  doneList: Array<string> = [];
  task: string;

  add() {
    this.tasksList.push(this.task);
    this.task = '';
  }
  done(task) {
    this.doneList.push(task);
    this.remove(task);
    console.log(this.doneList);
  }

  //Przekazuję z html parametr task. W funkcji następuje przefiltrowanie tabeli tasksList. Wszystkie parametry, które są różne od task są zwracane w postaci nowej tabeli.
  remove(task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }
}

