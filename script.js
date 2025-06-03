// اختبار الإملاء
document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const correctAnswers = {
    q1: 'مواقع',
    q2: '.js'
  };

  let score = 0;
  let total = Object.keys(correctAnswers).length;

  for (const question in correctAnswers) {
    const userAnswer = document.querySelector(`input[name=${question}]:checked`);
    if (userAnswer && userAnswer.value === correctAnswers[question]) {
      score++;
    }
  }

  const resultElem = document.getElementById('quiz-result');
  if (score === total) {
    resultElem.textContent = `ممتاز! جميع الإجابات صحيحة (${score} من ${total}) ✅`;
    resultElem.style.color = '#2ecc71'; // أخضر
  } else {
    resultElem.textContent = `حاول مرة أخرى. إجابات صحيحة: ${score} من ${total} ❌`;
    resultElem.style.color = '#e74c3c'; // أحمر
  }
});
