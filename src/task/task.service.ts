
import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { CreateTaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description, status, date } = createTaskDto;

    const task: Task = {
      id: this.tasks.length + 1,
      title,
      description,
      status,
      date,
    };

    this.tasks.push(task);
    return task;
  }

  updateTask(id: number, createTaskDto: CreateTaskDto): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }

    const updatedTask = { ...this.tasks[taskIndex], ...createTaskDto };
    this.tasks[taskIndex] = updatedTask;

    return updatedTask;
  }

  deleteTask(id: number): void {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }

    this.tasks.splice(taskIndex, 1);
  }
}
