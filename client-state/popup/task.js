const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if (document.cookie !== 'modalClosed') {
  modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modalClosed';
});