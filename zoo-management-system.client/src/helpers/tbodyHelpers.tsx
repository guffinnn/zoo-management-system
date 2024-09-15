import { DataType } from '@custom-types/dataType.ts';
import { Location } from 'react-router-dom';

export const getStatus = (status: string) => {
  switch (status) {
    case 'Выполнено':
      return <p className="cell__content select done">{status}</p>;
    case 'В процессе':
      return <p className="cell__content select in_work">{status}</p>;
    case 'Назначено':
      return <p className="cell__content select planned">{status}</p>;
  }
};

const dataTypeMap: { [key: string]: DataType } = {
  animals: 'animal',
  worktime: 'workTime',
  medicalExamination: 'medicalExamination',
  employees: 'employees',
};

export const getDataType = (location: Location): DataType => {
  const dataType = location.pathname.split('/')[1];
  return dataTypeMap[dataType];
};
