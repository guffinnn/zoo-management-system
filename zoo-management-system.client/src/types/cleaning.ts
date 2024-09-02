export interface Cleaning {
  time: number;
  animals: number[];
}

export type TableColumn =
  | string
  | {
      number: number;
      animals: string;
    };
