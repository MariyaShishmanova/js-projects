let count = 0;

const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('increase')) {
      count++;
    } else if (e.target.classList.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
