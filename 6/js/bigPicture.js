import { createCommentElement } from './picture.js';

export function showBigPicture(pictureData) {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img img').src = pictureData.url;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;

  const commentsContainer = bigPicture.querySelector('.social__comments');
  commentsContainer.innerHTML = '';
  pictureData.comments.forEach((comment) => {
    commentsContainer.appendChild(createCommentElement(comment));
  });

  bigPicture.querySelector('.social__caption').textContent = pictureData.description;

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  document.body.classList.add('modal-open');
}

export function hideBigPicture() {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const bigPictureClose = document.querySelector('.big-picture__cancel');

bigPictureClose.addEventListener('click', () => {
  hideBigPicture();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    hideBigPicture();
  }
});
