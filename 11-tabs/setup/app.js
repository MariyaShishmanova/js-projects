const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', e => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(btn => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });

    contents.forEach(content => {
      content.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
