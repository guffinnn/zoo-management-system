// For Button
export const ADD = {
  ANIMAL: 'Добавить животное',
  WORKTIME: 'Добавить работу',
  MEDICAL_EXAMINATION: 'Добавить мед. обследование',
  EMPLOYEE: 'Добавить сотрудника',
};
export const DEFAULT_ACTIVE_KEY = 0;
export const ANIMAL_ACTIVE_KEY = 1;
export const WORK_TIME_ACTIVE_KEY = 2;
export const MEDICAL_ACTIVE_KEY = 3;
export const FEEDING_ACTIVE_KEY = 4;
export const CLEANING_ACTIVE_KEY = 5;
export const EMPLOYEES_ACTIVE_KEY = 6;
// For messages
export const ERROR = {
  REQUIRED: 'Обязательное поле',
  EMAIL_FORMAT: 'Неверный формат электронной почты',
  PASSWORD_MIN_LENGTH: 'Пароль должен содержать минимум 6 символов',
  DATE_CONFLICT: 'Дата рождения не может быть позже даты зачисления',
  NOT_A_NUMBER: 'Поле должно содержать число',
  REQUIRED_TRUE: 'Подтверждение администратора обязательно',
  DATE_TOO_LATE: 'Дата не может быть позже текущей',
  DATE_TOO_EARLY: 'Дата не может быть раньше текущей',
  TIME_MIN_VALUE: 'Время не может быть меньше полчаса',
  NOTE_LENGTH_IS_LESS: 'Заключение должно быть больше 50 символов',
};
export const DEFAULT_MIN_LENGTH = 6;
export const DEFAULT_MIN_CHARACTERS = 50;
// For auth
export const LOGIN_SUCCEEDED = 'Вход выполнен';
export const LOGIN_FAILED = 'Вход не выполнен';
export const LOGIN_SUCCEEDED_INFO = 'Доступ к приложению открыт';
export const LOGIN_FAILED_INFO = 'Пользователя с такими данными не существует';
export const CLOSE_WINDOW = 'Закрыть';
export const EXIT_ACCOUNT = 'Выйти из аккаунта';
// For status
export const STATUS_REJECTED = 'Отклонено';
export const STATUS_CONFIRMED = 'Подтверждение';
export const STATUS_REJECTED_INFO =
  'Проверьте подключение к сети Интернет и попробуйте еще раз';
export const STATUS_CONFIRMED_INFO = {
  animal: 'Вы действительно хотите добавить новое животное?',
  workTime: 'Вы действительно хотите добавить выполненную работу?',
  medicalExamination:
    'Вы действительно хотите добавить медицинское обследование?',
  employees: 'Вы действительно хотите добавить нового сотрудника?',
};
export const BUTTON_RETRY = 'Заново';
export const BUTTON_ADD = 'Добавить';
export const BUTTON_EXIT = 'Выйти';
export const BUTTON_DONT_ADD = 'Не добавлять';
// For search
export const DEFAULT_DEBOUNCE_DELAY = 500;
export const DEFAULT_SEARCH_MIN_LENGTH = 2;
