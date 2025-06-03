// بيانات الدروس (100 درس) مع روابط فيديوهات يوتيوب تعليمية مفيدة (تنويع بسيط)
const lessonsData = [];
for (let i = 1; i <= 100; i++) {
  lessonsData.push({
    title: `درس رقم ${i} - تعلم جافا سكريبت`,
    description: `شرح مفصل ومبسط للدرس رقم ${i} في لغة جافا سكريبت.`,
    videoUrl: i % 10 === 0 ? "https://www.youtube.com/embed/V_Kr9OSfDeU" :
              i % 9 === 0 ? "https://www.youtube.com/embed/DHvZLI7Db8E" :
              i % 8 === 0 ? "https://www.youtube.com/embed/o6bBRtXgHog" :
              i % 7 === 0 ? "https://www.youtube.com/embed/0ik6X4DJKCc" :
              i % 6 === 0 ? "https://www.youtube.com/embed/9J6MZ4CkqQ8" :
              i % 5 === 0 ? "https://www.youtube.com/embed/6d9xS8-MBs0" :
              i % 4 === 0 ? "https://www.youtube.com/embed/7m2f5wJ8VQ8" :
              i % 3 === 0 ? "https://www.youtube.com/embed/eGz9DS-aIeY" :
              i % 2 === 0 ? "https://www.youtube.com/embed/1Rs2ND1ryYc" :
                            "https://www.youtube.com/embed/W6NZfCO5SIk"
  });
}

// توليد الدروس في الصفحة
const lessonsContainer = document.getElementById('lessons-container');
lessonsData.forEach(lesson => {
  const card = document.createElement('article');
  card.className = 'lesson-card';

  card.innerHTML = `
    <div class="lesson-icon blue-bg"><span class="material-icons-outlined">play_circle_filled</span></div>
    <h3>${lesson.title}</h3>
    <p>${lesson.description}</p>
    <iframe src="${lesson.videoUrl}" title="${lesson.title}" allowfullscreen loading="lazy" referrerpolicy="no-referrer"></iframe>
  `;

  lessonsContainer.appendChild(card);
});

// بيانات أسئلة الاختبار (5 أسئلة نموذجية)
const quizQuestions = [
  {
    question: "1. لغة جافا سكريبت تستخدم في تطوير _____ الويب.",
    options: ["مواقع", "مكياج", "طعام"],
    answer: "مواقع"
  },
  {
    question: "2. جافا سكريبت تكتب عادة في ملفات _____.",
    options: [".js", ".exe", ".doc"],
    answer: ".js"
  },
  {
    question: "3. الدالة في جافا سكريبت تعرف باستخدام كلمة _____.",
    options: ["function", "def", "func"],
    answer: "function"
  },
  {
    question: "4. لتخزين قيمة في متغير في جافا سكريبت نستخدم الكلمة _____.",
    options: ["let", "var", "const"],
    answer: "let"
  },
  {
    question: "5. الشيفرة بين <script> و</script> تكتب بلغة _____.",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript"
  }
];

// توليد أسئلة الاختبار في الصفحة
const quizForm = document.getElementById('quiz-form');
quizQuestions.forEach((q, i) => {
  const questionDiv = document.createElement('div');
  questionDiv.className = 'quiz-item';

  let optionsHtml = '';
  q.options.forEach((opt, idx) => {
    const optionId = `q${i+1}o${idx}`;
    optionsHtml += `
      <input type="radio" id="${optionId}" name="q${i+1}" value="${opt}" required />
      <label for="${optionId}">${opt}</label>
    `;
  });

  questionDiv.innerHTML = `
    <label>${q.question}</label>
    <div class="radio-group">${optionsHtml}</div>
  `;

  quizForm.appendChild(questionDiv);
});

// زر التحقق
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.className = 'btn-primary';
submitBtn.textContent = 'تحقق من الإجابة';
quizForm.appendChild(submitBtn);

// حدث التحقق من الاختبار
quizForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let score = 0;
  quizQuestions.forEach((q, i) => {
    const selected = quizForm.querySelector(`input[name=q${i+1}]:checked`);
    if (selected && selected.value === q.answer) score++;
  });

  const resultElem = document.getElementById('quiz-result');
  if (score === quizQuestions.length) {
    resultElem.textContent = `ممتاز! جميع الإجابات صحيحة (${score} من ${quizQuestions.length}) ✅`;
    resultElem.style.color = '#2ecc71'; // أخضر
  } else {
    resultElem.textContent = `حاول مرة أخرى. إجابات صحيحة: ${score} من ${quizQuestions.length} ❌`;
    resultElem.style.color = '#e74c3c'; // أحمر
  }
});
