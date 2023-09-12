export class Task {
  id : Number;
  title: string;
  description: string;
  status: 'done' | 'not done';
  date?: Date;
}
