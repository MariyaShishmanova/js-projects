const questionsBtn = document.querySelectorAll('.question-btn');

questionsBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const question = e.target.closest('.question');
    question.classList.toggle('show-text');
  });
});
