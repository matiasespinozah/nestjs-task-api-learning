import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class TaskDTO {
  @IsNotEmpty({ message: 'Descripción es requerida' })
  @IsString({ message: 'Descripción debe ser un texto' })
  readonly description: string

  @IsNotEmpty({ message: 'Es requerido' })
  @IsBoolean({ message: 'Debe ser un booleano' })
  readonly isDone: boolean
}
