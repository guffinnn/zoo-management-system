import { Cleaning } from '@custom-types/cleaning.ts';
import { Feeding } from '@custom-types/feeding.ts';

export const FEEDING: Feeding[] = [
  { time: 7, animals: [2, 3, 6, 7] },
  { time: 8, animals: [1, 4, 5] },
  { time: 9, animals: [2] },
  { time: 10, animals: [] },
  { time: 11, animals: [2, 3] },
  { time: 12, animals: [1, 5] },
  { time: 13, animals: [2, 4, 7] },
  { time: 14, animals: [6] },
  { time: 15, animals: [2, 3] },
  { time: 16, animals: [1, 4] },
  { time: 17, animals: [5] },
  { time: 18, animals: [2, 3] },
  { time: 19, animals: [6] },
  { time: 20, animals: [7] },
  { time: 21, animals: [1, 4, 5] },
];

export const CLEANING: Cleaning[] = [
  { time: 7, animals: [6] },
  { time: 8, animals: [3, 4, 7] },
  { time: 9, animals: [2, 5] },
  { time: 10, animals: [1] },
  { time: 11, animals: [] },
  { time: 12, animals: [3] },
  { time: 13, animals: [2, 4, 7] },
  { time: 14, animals: [1, 6] },
  { time: 15, animals: [5] },
  { time: 16, animals: [] },
  { time: 17, animals: [] },
  { time: 18, animals: [3] },
  { time: 19, animals: [1, 4, 6] },
  { time: 20, animals: [2, 5, 7] },
  { time: 21, animals: [] },
];
