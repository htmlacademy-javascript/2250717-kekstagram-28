import { addEventListener } from './big-picture.js';


const pictures = document.querySelector('.pictures');
const pictureUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const createPost = ((post) => {
  const pictureElement = pictureUsersTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__img').alt = 'Случайная фотография';
  pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;

  return pictureElement;
});

const renderPosts = (similarPictures) => {
  similarPictures.forEach((post) => picturesFragment.append(createPost(post)));

  pictures.append(picturesFragment);
  addEventListener(similarPictures);
};

export { renderPosts };
