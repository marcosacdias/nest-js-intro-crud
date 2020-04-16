import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
    tasks: Task[] =  [
        { id: 1, description: 'Tarefa 1', completed: false },
        { id: 2, description: 'Tarefa 2', completed: false },
        { id: 3, description: 'Tarefa 3', completed: true },
        { id: 4, description: 'Tarefa 4', completed: false },
        { id: 5, description: 'Tarefa 5', completed: false },
        { id: 6, description: 'Tarefa 6', completed: false },
    ];

    getAll() {
        return this.tasks;
    }

    getById(id: number) {
        const task = this.tasks.find((x) => x.id == id);
        return task;
    }

    delete(id: number) {

    }

    create(task: Task) {

    }

    update(task: Task) {

    }


}
