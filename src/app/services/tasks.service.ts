import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable()
export class TasksService {
    tasksList: Array<Task> = [];
    doneList: Array<Task> = [];

    private tasksListObs = new BehaviorSubject<Array<Task>>([]);
    private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);


    constructor() {
        this.tasksList = [
            { name: 'Sprzątanie kuwety', created: new Date() },
            { name: 'Nauka angulara', created: new Date() },
            { name: 'Podlewanie kwiatów', created: new Date() },
            { name: 'Zakupy', created: new Date() }
        ];
        this.tasksListObs.next(this.tasksList);
    }

    add(task: Task) {
        this.tasksList.push(task);
        this.tasksListObs.next(this.tasksList);
    }

    done(task: Task) {
        this.doneList.push(task);
        this.remove(task);
        this.tasksDoneObs.next(this.doneList);
    }

    // Przekazuję z html parametr task. W funkcji następuje przefiltrowanie tabeli tasksList. Wszystkie parametry,
    // które są różne od task są zwracane w postaci nowej tabeli.
    remove(task: Task) {
        this.tasksList = this.tasksList.filter(e => e !== task);
        this.tasksListObs.next(this.tasksList);
    }

    getTasksListObs(): Observable<Array<Task>> {
        return this.tasksListObs.asObservable();
    }

    getTasksDoneObs(): Observable<Array<Task>> {
        return this.tasksDoneObs.asObservable();
    }
}
