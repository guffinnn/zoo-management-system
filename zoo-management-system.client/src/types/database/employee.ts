export interface Employee {
  id: string;
  user_uid?: string;
  name: string;
  surname: string;
  middle_name: string;
  role: string;
  salary: number;
  date_of_hire: string;
  actions?: string;
}
