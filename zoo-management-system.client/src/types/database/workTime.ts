export interface WorkTime {
  id: string;
  employee: string;
  date_of_work: string;
  type_of_work: string; // TODO: Delete
  status: string;
  time: number;
  actions: string;
}
