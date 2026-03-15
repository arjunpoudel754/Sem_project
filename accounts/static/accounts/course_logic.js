// Shared Logic for Word, Excel, and PowerPoint
let currentIdx = 0;
let completedCount = 0;

function renderLessonList() {
    dbLessons.forEach((l, i) => {
        const btn = document.getElementById(`btn-${i}`);
        const icon = document.getElementById(`check-${i}`);
        if (!btn || !icon) return;

        if (i === currentIdx) btn.classList.add('active-lesson');
        else btn.classList.remove('active-lesson');

        if (i < completedCount) {
            icon.className = "fa-solid fa-circle-check text-emerald-500";
        }
    });
}

function loadLesson(idx) {
    currentIdx = idx;
    const l = dbLessons[idx];
    
    document.getElementById('module-label').innerText = "Lesson " + l.label;
    document.getElementById('lesson-title').innerText = l.title;
    document.getElementById('lesson-theory').innerHTML = l.theory;
    document.getElementById('word-frame').src = l.embed_url || "";
    
    document.getElementById('quiz-container').innerHTML = l.questions.map((q, i) => `
        <div class="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <button onclick="toggleAcc(${i})" class="w-full text-left p-4 font-bold text-sm flex justify-between items-center hover:bg-slate-50">
                Q${i+1}: ${q.q} <i id="icon-${i}" class="fa-solid fa-chevron-down opacity-30 text-[10px]"></i>
            </button>
            <div id="acc-${i}" class="accordion-content px-4 space-y-2">
                ${q.opts.map((opt, oi) => `
                    <label class="flex items-center gap-3 text-xs p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-blue-50">
                        <input type="radio" name="q-${i}" value="${oi}"> ${opt}
                    </label>`).join('')}
            </div>
        </div>
    `).join('');
    renderLessonList();
}

function toggleAcc(i) {
    document.getElementById(`acc-${i}`).classList.toggle('open');
    document.getElementById(`icon-${i}`).classList.toggle('rotate-180');
}

function checkAllAnswers() {
    let wrong = [];
    dbLessons[currentIdx].questions.forEach((q, i) => {
        const sel = document.querySelector(`input[name="q-${i}"]:checked`);
        if (!sel || sel.value !== q.ans) wrong.push(i + 1);
    });
    if (wrong.length === 0) {
        document.getElementById('feedback-correct').classList.remove('hidden');
    } else {
        document.getElementById('error-details').innerHTML = `Question(s) <strong>${wrong.join(', ')}</strong> incorrect.`;
        document.getElementById('feedback-wrong').classList.remove('hidden');
    }
}

function moveToNextLesson() {
    closeFeedback();
    if (currentIdx === completedCount) {
        completedCount++;
        const total = dbLessons.length;
        document.getElementById('progress-text').innerText = `${completedCount} of ${total} complete`;
        document.getElementById('progress-badge').innerText = `${completedCount}/${total}`;
    }
    if (currentIdx < dbLessons.length - 1) loadLesson(currentIdx + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeFeedback() {
    document.getElementById('feedback-correct').classList.add('hidden');
    document.getElementById('feedback-wrong').classList.add('hidden');
}

function jumpToLesson(i) {
    if (i <= completedCount) loadLesson(i);
    else alert("Please complete the current lesson quiz first!");
}