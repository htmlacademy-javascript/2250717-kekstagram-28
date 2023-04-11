//модуль, который создаёт данные.
import { getRandomNum } from './util.js';
import { MESSAGES, NAMES, DESCRIPTIONS } from './data.js';

//Функция для создания списка комментариев
const createUsersPhotoComments = (id) => ({
  id,
  avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
  message: MESSAGES[getRandomNum(0, MESSAGES.length - 1)],
  name: NAMES[getRandomNum(0, NAMES.length - 1)]
});

//начинаем с функции по созданию объекта
const createUserPhotoDescription = (id) => ({
  id,
  url: `photos/${id + 1}.jpg`,
  description: DESCRIPTIONS[getRandomNum(0, DESCRIPTIONS.length - 1)],
  likes: getRandomNum(15, 200),
  comments: Array.from({ length: getRandomNum(1, 15) }, (_, key) => createUsersPhotoComments(parseInt(id.toString() + 0 + key.toString(), 10))),
});

//создаем массив объектов с описанием фотографий
const generateUserPhotoDescription = () => Array.from({ length: 25 }, (_, key) => createUserPhotoDescription(key));

export { generateUserPhotoDescription };
