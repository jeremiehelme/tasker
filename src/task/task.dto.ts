export class CreateTaskDto {
  title: string;
  description: string;
  status: 'done' | 'not done';
  date?: Date;
}
