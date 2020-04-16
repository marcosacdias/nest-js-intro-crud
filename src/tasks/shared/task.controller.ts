import { Controller, Get, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task';

@Controller('task')
export class TasksController {
    constructor(private readonly taskService: TaskService) {

    }

    @Get()
    async getAll() : Promise<Task[]> {
        return this.taskService.getAll();
    }

    @Get(':id')
    async getById(@Param() params) : Promise<Task> {
        const id: number =  params.id;
        return this.taskService.getById(id);
    }
}
