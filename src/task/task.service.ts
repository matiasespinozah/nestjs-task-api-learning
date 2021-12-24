import { Injectable } from '@nestjs/common'
import { ITask } from './dto/task.interface'
import { v4 as uuidv4 } from 'uuid'
import { TaskDTO } from './dto/task.dto'

@Injectable()
export class TaskService {
  tasks: ITask[] = []

  create(taskDTO: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...taskDTO
    }
    this.tasks.push(task)
    return task
  }

  findAll(): ITask[] {
    return this.tasks
  }

  findById(id: string): ITask {
    return this.tasks.find((task) => task.id === id)
  }

  update(id: string, taskDTO: TaskDTO): ITask {
    const task = this.findById(id)
    task.description = taskDTO.description
    task.isDone = taskDTO.isDone
    return task
  }

  delete(id: string): ITask {
    const task = this.findById(id)
    this.tasks = this.tasks.filter((task) => task.id !== id)
    return task
  }
}
