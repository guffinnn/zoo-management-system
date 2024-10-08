export const PATH = {
  TO_HOME: '/',
  TO_ANIMALS: '/animals',
  TO_FEEDING: '/feeding',
  TO_WORKTIME: '/worktime',
  TO_EXAMINATION: '/medicalExamination',
  TO_CLEANING: '/cleaning',
  TO_EMPLOYEES: '/employees',
  TO_MODAL: '/modal/:modalType/:dataType?/:id?',
  TO_AUTH_MODAL: '/modal/auth',
  TO_STATUS_MODAL: '/modal/status',
  TO_ADD_MODAL: {
    animal: '/modal/add/animal',
    workTime: '/modal/add/workTime',
    medicalExamination: '/modal/add/medicalExamination',
    employees: '/modal/add/employees',
  },
  TO_EDIT_MODAL: {
    animal: '/modal/edit/animal/:id?',
    workTime: '/modal/edit/workTime/:id?',
    medicalExamination: '/modal/edit/medicalExamination/:id?',
    employees: '/modal/edit/employees/:id?',
  },
  TO_VALIDATION_MODAL: {
    animal: '/modal/validation/animal',
    workTime: '/modal/validation/workTime',
    medicalExamination: '/modal/validation/medicalExamination',
    employees: '/modal/validation/employees',
  },
};
