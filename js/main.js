// функция для генерации случайного числа в заданном диапазоне
function getRandomInt(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// массив с набором комментариев
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// массив с набором имен для комментаторов
const names = ['Иван', 'Алексей', 'Светлана', 'Мария', 'Дмитрий', 'Елена'];

// функция для генерации случайного комментария
function generateComment() {
  const randomIndex = getRandomInt(0, messages.length - 1);
  return {
    id: getRandomInt(1, 100000),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: `${messages[randomIndex]} ${messages[randomIndex]}`,
    name: names[getRandomInt(0, names.length - 1)]
  };
}

// функция для генерации массива из 25 объектов
function generateData() {
  const data = [];
  const ids = new Set();
  for (let i = 0; i < 25; i++) {
    let id;
    do {
      id = getRandomInt(1, 25);
    } while (ids.has(id));
    ids.add(id);
    const comments = [];
    const numComments = getRandomInt(1, 5);
    for (let j = 0; j < numComments; j++) {
      comments.push(generateComment());
    }
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

// генерация массива из 25 объектов
const dataArray = generateData();

// вывод данных в консоль
// console.log(dataArray);
