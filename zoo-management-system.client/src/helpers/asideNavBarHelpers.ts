import { PATH } from '@constants/paths.ts';
import {
  ANIMAL_ACTIVE_KEY,
  CLEANING_ACTIVE_KEY,
  DEFAULT_ACTIVE_KEY,
  FEEDING_ACTIVE_KEY,
  MEDICAL_ACTIVE_KEY,
  WORK_TIME_ACTIVE_KEY,
} from '@constants/values.ts';

interface SetActiveKeyByLocationProps {
  location: Location['pathname'];
  setActiveKey: (activeKey: number | null) => void;
}

export function setActiveKeyByLocation({
  location,
  setActiveKey,
}: SetActiveKeyByLocationProps) {
  const {
    TO_HOME,
    TO_ANIMALS,
    TO_FEEDING,
    TO_WORKTIME,
    TO_EXAMINATION,
    TO_CLEANING,
  } = PATH;

  switch (location) {
    case TO_HOME:
      setActiveKey(DEFAULT_ACTIVE_KEY);
      break;
    case TO_ANIMALS:
      setActiveKey(ANIMAL_ACTIVE_KEY);
      break;
    case TO_FEEDING:
      setActiveKey(FEEDING_ACTIVE_KEY);
      break;
    case TO_WORKTIME:
      setActiveKey(WORK_TIME_ACTIVE_KEY);
      break;
    case TO_EXAMINATION:
      setActiveKey(MEDICAL_ACTIVE_KEY);
      break;
    case TO_CLEANING:
      setActiveKey(CLEANING_ACTIVE_KEY);
      break;
    default:
      setActiveKey(null);
  }
}
