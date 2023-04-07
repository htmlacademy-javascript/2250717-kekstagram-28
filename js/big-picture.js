import { isEscapeKey } from './util.js';

export const addEventListener = (similarPictures) => {
  const picturesElement = document.querySelector('.pictures');
  const pictureElements = document.querySelectorAll('.picture');
  const commentsElement = document.querySelector('.social__comments');
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

  const elBody = document.querySelector('body');

  picturesElement.addEventListener('click', (e) => {
    e.preventDefault();
    const currentElement = e.target.parentElement;
    const arr = Array.from(pictureElements);
    const index = arr.indexOf(currentElement);
    if (index >= 0) {
      openBigPicture(similarPictures[index]);
    }

  });

  const onBigPictureEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture();
    }
  };

  function openBigPicture(post) {
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.big-picture__img img').src = post.url;
    bigPicture.querySelector('.likes-count').textContent = post.likes;
    bigPicture.querySelector('.social__caption').textContent = post.description;


    const commentElement = commentsElement.querySelector('.social__comment').cloneNode(true);

    while (commentsElement.firstChild) {
      commentsElement.removeChild(commentsElement.firstChild);
    }

    const commentsLoader = document.querySelector('.social__comments-loader');
    const socialCommentCount = document.querySelector('.social__comment-count');

    let loadingComments = 0;
    const COMMENTS_PER_PORTION = 5;

    const renderComments = () => {
      loadingComments += COMMENTS_PER_PORTION;
      commentsElement.innerHTML = '';
      const commentsToShow = Math.min(post.comments.length, loadingComments);

      post.comments.forEach((comment, index) => {
        if (index < commentsToShow) {
          const commentEl = commentElement.cloneNode(true);
          commentEl.querySelector('.social__picture').src = comment.avatar;
          commentEl.querySelector('.social__picture').alt = comment.name;
          commentEl.querySelector('.social__text').textContent = comment.message;
          socialCommentCount.textContent = `${commentsToShow} из ${post.comments.length} комментариев`;

          if (loadingComments >= post.comments.length) {
            commentsLoader.classList.add('hidden');
            loadingComments = post.comments.length;
            // есть вопрос по удалению события и комментариев(они накапливаются)
            commentsLoader.removeEventListener('click', renderComments);
          } else {
            commentsLoader.classList.remove('hidden');
            commentsLoader.addEventListener('click', renderComments);
          }
          commentsElement.append(commentEl);
        }
      });
    };
    renderComments();

    elBody.classList.add('modal-open');

    document.addEventListener('keydown', onBigPictureEscKeydown);
  }

  function closeBigPicture() {
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown', onBigPictureEscKeydown);

    elBody.classList.remove('modal-open');
  }
  bigPictureCloseElement.addEventListener('click', closeBigPicture);
};

