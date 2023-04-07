import { generateData } from './data.js';

// генерация массива из 25 объектов
const dataArray = generateData();

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

dataArray.forEach((data) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = data.url;
  pictureElement.querySelector('.picture__likes').textContent = data.likes;
  pictureElement.querySelector('.picture__comments').textContent = data.comments.length;
  fragment.appendChild(pictureElement);
});

picturesContainer.appendChild(fragment);
