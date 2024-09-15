export interface Animal {
  id: string;
  nickname: string;
  species: string;
  gender: string;
  date_of_birth: string;
  date_of_registration: string;
  photo?: string | null;
  actions?: string;
}

export interface Column {
  name: string;
  type: string;
}
