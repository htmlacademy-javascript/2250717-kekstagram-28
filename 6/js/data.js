import { getRandomInt } from './util.js';

// функция для генерации случайного комментария
export function generateComment() {
  // массив с набором комментариев
  const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  // массив с набором имен
  const NAMES = ['Иван', 'Алексей', 'Светлана', 'Мария', 'Дмитрий', 'Елена'];

  const randomIndex = getRandomInt(0, MESSAGES.length - 1);
  return {
    id: getRandomInt(1, 100000),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: `${MESSAGES[randomIndex]} ${MESSAGES[randomIndex]}`,
    name: NAMES[getRandomInt(0, NAMES.length - 1)]
  };
}

// определяем функцию, которая генерирует массив из 25 объектов
export function generateData() {
  const data = [];
  const ids = new Set();

  // генерируем 25 фотографий
  for (let i = 0; i < 25; i++) {
    let id;
    do {
      // генерируем уникальный ID
      id = getRandomInt(1, 25);
    } while (ids.has(id));
    ids.add(id);

    // генерируем случайное количество комментариев к фотографии
    const comments = [];
    const numComments = getRandomInt(1, 5);
    for (let j = 0; j < numComments; j++) {
      comments.push(generateComment());
    }

    // генерируем фотообъект и добавляем его в массив данных
    data.push({
      id: id,
      url: `photos/${id}.jpg`,
      description: `Описание фотографии: ${id}`,
      likes: getRandomInt(15, 200),
      comments: comments
    });
  }
  return data;
}
