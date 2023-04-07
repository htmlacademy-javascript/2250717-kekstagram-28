// функция для создания DOM-элемента для комментария
// eslint-disable-next-line no-unused-vars
function createCommentElement(comment) {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const commentAvatarElement = document.createElement('img');
  commentAvatarElement.classList.add('social__picture');
  commentAvatarElement.src = comment.avatar;
  commentAvatarElement.alt = comment.name;
  commentAvatarElement.width = 35;
  commentAvatarElement.height = 35;
  commentElement.appendChild(commentAvatarElement);

  const commentTextElement = document.createElement('p');
  commentTextElement.classList.add('social__text');
  commentTextElement.textContent = comment.message;
  commentElement.appendChild(commentTextElement);

  return commentElement;
}

// функция для создания DOM-элемента для фотографии
export function createPictureElement(pictureData) {
  const pictureElement = document.createElement('a');
  pictureElement.classList.add('picture');
  pictureElement.href = '#';

  const pictureImageElement = document.createElement('img');
  pictureImageElement.classList.add('picture__img');
  pictureImageElement.src = pictureData.url;
  pictureImageElement.alt = pictureData.description;
  pictureImageElement.width = 182;
  pictureImageElement.height = 182;
  pictureElement.appendChild(pictureImageElement);

  const pictureLikesElement = document.createElement('p');
  pictureLikesElement.classList.add('picture__likes');
  pictureLikesElement.textContent = pictureData.likes;
  pictureElement.appendChild(pictureLikesElement);

  const pictureCommentsElement = document.createElement('p');
  pictureCommentsElement.classList.add('picture__comments');
  pictureCommentsElement.textContent = pictureData.comments.length;
  pictureElement.appendChild(pictureCommentsElement);

  return pictureElement;
}
