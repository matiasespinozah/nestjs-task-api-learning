import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'

// dto
import { TaskDTO } from './dto/task.dto'

// services
import { TaskService } from './task.service'

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDTO: TaskDTO) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('something went wrong'), 15000
      }, 5000)
    })
    // return this.taskService.create(taskDTO)
  }

  @Get()
  findAll() {
    return this.taskService.findAll()
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.taskService.findById(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id)
  }
}
