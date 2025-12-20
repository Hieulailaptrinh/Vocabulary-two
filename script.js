const vocabularyData = [
  {
    id: 1,
    word: "insert",
    ipa: "/ɪnˈsɜːt/",
    meaning: "chèn",
    example: "Please insert your card into the slot.",
  },
  {
    id: 2,
    word: "arrange",
    ipa: "/əˈreɪndʒ/",
    meaning: "sắp xếp",
    example: "I will arrange a meeting for tomorrow.",
  },
  {
    id: 3,
    word: "discard",
    ipa: "/dɪˈskɑːd/",
    meaning: "vứt, bỏ",
    example: "Discard any old cleaning materials.",
  },
  {
    id: 4,
    word: "empty",
    ipa: "/ˈemp.ti/",
    meaning: "trống, làm trống",
    example: "The room was entirely empty.",
  },
  {
    id: 5,
    word: "scatter",
    ipa: "/ˈskæt.ər/",
    meaning: "phân tán, vứt rải rác",
    example: "The wind scattered the leaves.",
  },
  {
    id: 6,
    word: "canopy",
    ipa: "/ˈkæn.ə.pi/",
    meaning: "mái che",
    example: "Trees form a canopy over the road.",
  },
  {
    id: 7,
    word: "display",
    ipa: "/dɪˈspleɪ/",
    meaning: "trưng bày, trình chiếu",
    example: "The goods were displayed in the window.",
  },
  {
    id: 8,
    word: "budget",
    ipa: "/ˈbʌdʒ.ɪt/",
    meaning: "ngân sách",
    example: "We are working on a tight budget.",
  },
  {
    id: 9,
    word: "main branch",
    ipa: "/meɪn brɑːntʃ/",
    meaning: "chi nhánh chính",
    example: "Please visit our main branch for support.",
  },
  {
    id: 10,
    word: "appointment",
    ipa: "/əˈpɔɪnt.mənt/",
    meaning: "cuộc hẹn",
    example: "I have a dental appointment at 3 PM.",
  },
  {
    id: 11,
    word: "stop by",
    ipa: "/stɒp baɪ/",
    meaning: "ghé ngang",
    example: "Can you stop by the store on your way home?",
  },
  {
    id: 12,
    word: "make it",
    ipa: "/meɪk ɪt/",
    meaning: "làm được (thành công/đến nơi)",
    example: "I hope you can make it to the party.",
  },
  {
    id: 13,
    word: "fill the position",
    ipa: "/fɪl ðə pəˈzɪʃ.ən/",
    meaning: "tuyển người lấp vào vị trí",
    example: "We need to fill the position urgently.",
  },
  {
    id: 14,
    word: "innovative",
    ipa: "/ˈɪn.ə.və.tɪv/",
    meaning: "có tính đổi mới",
    example: "He has many innovative ideas.",
  },
  {
    id: 15,
    word: "feature",
    ipa: "/ˈfiː.tʃər/",
    meaning: "đặc điểm, tính năng",
    example: "This phone has a unique feature.",
  },
  {
    id: 16,
    word: "revise",
    ipa: "/rɪˈvaɪz/",
    meaning: "sửa đổi, ôn tập",
    example: "Please revise your essay.",
  },
  {
    id: 17,
    word: "warranty",
    ipa: "/ˈwɒr.ən.ti/",
    meaning: "bảo hành",
    example: "The car comes with a 3-year warranty.",
  },
  {
    id: 18,
    word: "property",
    ipa: "/ˈprɒp.ə.ti/",
    meaning: "tài sản, bất động sản",
    example: "This property is for sale.",
  },
  {
    id: 19,
    word: "confirmation",
    ipa: "/ˌkɒn.fəˈmeɪ.ʃən/",
    meaning: "sự xác nhận",
    example: "I received a confirmation email.",
  },
  {
    id: 20,
    word: "avoid",
    ipa: "/əˈvɔɪd/",
    meaning: "tránh",
    example: "Try to avoid rush hour traffic.",
  },
  {
    id: 21,
    word: "electrical failure",
    ipa: "/iˈlek.trɪ.kəl ˈfeɪ.ljər/",
    meaning: "sự mất điện/hỏng điện",
    example: "The blackout was caused by an electrical failure.",
  },
  {
    id: 22,
    word: "occur",
    ipa: "/əˈkɜːr/",
    meaning: "xảy ra",
    example: "When did the accident occur?",
  },
  {
    id: 23,
    word: "unavailable",
    ipa: "/ˌʌn.əˈveɪ.lə.bəl/",
    meaning: "không có sẵn",
    example: "The manager is currently unavailable.",
  },
  {
    id: 24,
    word: "incorrect",
    ipa: "/ˌɪn.kərˈekt/",
    meaning: "không chính xác",
    example: "Your answer is incorrect.",
  },
  {
    id: 25,
    word: "absolutely",
    ipa: "/ˌæb.səˈluːt.li/",
    meaning: "một cách chắc chắn",
    example: "You are absolutely right.",
  },
  {
    id: 26,
    word: "acquire",
    ipa: "/əˈkwaɪər/",
    meaning: "đạt được, thâu tóm",
    example: "The company acquired a new branch.",
  },
  {
    id: 27,
    word: "significant",
    ipa: "/sɪɡˈnɪf.ɪ.kənt/",
    meaning: "đáng kể",
    example: "There was a significant change in profits.",
  },
  {
    id: 28,
    word: "restoration",
    ipa: "/ˌres.tərˈeɪ.ʃən/",
    meaning: "sự khôi phục",
    example: "The restoration of the old building is complete.",
  },
  {
    id: 29,
    word: "stunning",
    ipa: "/ˈstʌn.ɪŋ/",
    meaning: "tuyệt đẹp",
    example: "The view from the top is stunning.",
  },
  {
    id: 30,
    word: "unveil",
    ipa: "/ʌnˈveɪl/",
    meaning: "tiết lộ, vén màn",
    example: "They will unveil the new statue tomorrow.",
  },
  {
    id: 31,
    word: "anniversary",
    ipa: "/ˌæn.ɪˈvɜː.sər.i/",
    meaning: "ngày kỷ niệm",
    example: "It is their 10th wedding anniversary.",
  },
  {
    id: 32,
    word: "informal",
    ipa: "/ɪnˈfɔː.məl/",
    meaning: "không trang trọng",
    example: "The meeting was very informal.",
  },
  {
    id: 33,
    word: "pharmaceutical",
    ipa: "/ˌfɑː.məˈsuː.tɪ.kəl/",
    meaning: "thuộc dược phẩm",
    example: "She works in the pharmaceutical industry.",
  },
  {
    id: 34,
    word: "manufacturer",
    ipa: "/ˌmæn.jəˈfæk.tʃər.ər/",
    meaning: "nhà sản xuất",
    example: "Check with the manufacturer for details.",
  },
  {
    id: 35,
    word: "mandatory",
    ipa: "/ˈmæn.də.tər.i/",
    meaning: "bắt buộc",
    example: "Wearing a helmet is mandatory.",
  },
  {
    id: 36,
    word: "entire",
    ipa: "/ɪnˈtaɪər/",
    meaning: "toàn bộ",
    example: "I spent the entire day reading.",
  },
  {
    id: 37,
    word: "funding",
    ipa: "/ˈfʌn.dɪŋ/",
    meaning: "tiền tài trợ",
    example: "The project received government funding.",
  },
  {
    id: 38,
    word: "extend",
    ipa: "/ɪkˈstend/",
    meaning: "kéo dài, gia hạn",
    example: "Can you extend the deadline?",
  },
  {
    id: 39,
    word: "assistance",
    ipa: "/əˈsɪs.təns/",
    meaning: "sự hỗ trợ",
    example: "Do you need any assistance?",
  },
  {
    id: 40,
    word: "apply for",
    ipa: "/əˈplaɪ fɔːr/",
    meaning: "ứng tuyển",
    example: "I decided to apply for the job.",
  },
  {
    id: 41,
    word: "grant",
    ipa: "/ɡrɑːnt/",
    meaning: "trợ cấp (n), cấp cho (v)",
    example: "He received a research grant.",
  },
  {
    id: 42,
    word: "segment",
    ipa: "/ˈseɡ.mənt/",
    meaning: "phân khúc, đoạn",
    example: "We target a specific market segment.",
  },
  {
    id: 43,
    word: "state of the art",
    ipa: "/ˌsteɪt.əv.ðiːˈɑːt/",
    meaning: "hiện đại nhất",
    example: "The lab has state-of-the-art technology.",
  },
  {
    id: 44,
    word: "athlete",
    ipa: "/ˈæθ.liːt/",
    meaning: "vận động viên",
    example: "He is a professional athlete.",
  },
  {
    id: 45,
    word: "compete",
    ipa: "/kəmˈpiːt/",
    meaning: "cạnh tranh, thi đấu",
    example: "Teams will compete for the gold medal.",
  },
  {
    id: 46,
    word: "delighted",
    ipa: "/dɪˈlaɪ.tɪd/",
    meaning: "hài lòng, vui vẻ",
    example: "I am delighted to meet you.",
  },
  {
    id: 47,
    word: "institute",
    ipa: "/ˈɪn.stɪ.tʃuːt/",
    meaning: "viện, học viện",
    example: "She studies at the Art Institute.",
  },
  {
    id: 48,
    word: "initiative",
    ipa: "/ɪˈnɪʃ.ə.tɪv/",
    meaning: "sáng kiến",
    example: "This is a new peace initiative.",
  },
  {
    id: 49,
    word: "preserve",
    ipa: "/prɪˈzɜːv/",
    meaning: "gìn giữ, bảo quản",
    example: "We must preserve our traditions.",
  },
  {
    id: 50,
    word: "allocate",
    ipa: "/ˈæl.ə.keɪt/",
    meaning: "phân bổ",
    example: "Funds were allocated for education.",
  },
  {
    id: 51,
    word: "preliminary",
    ipa: "/prɪˈlɪm.ɪ.nər.i/",
    meaning: "sơ bộ",
    example: "These are preliminary results.",
  },
  {
    id: 52,
    word: "findings",
    ipa: "/ˈfaɪn.dɪŋz/",
    meaning: "phát hiện, kết quả tìm được",
    example: "The findings of the study were published.",
  },
  {
    id: 53,
    word: "forecasting",
    ipa: "/ˈfɔːkɑːstɪŋ/",
    meaning: "dự báo",
    example: "Weather forecasting is difficult.",
  },
  {
    id: 54,
    word: "customize",
    ipa: "/ˈkʌs.tə.maɪz/",
    meaning: "tùy chỉnh",
    example: "You can customize the settings.",
  },
  {
    id: 55,
    word: "transplant",
    ipa: "/trænˈsplɑːnt/",
    meaning: "cấy ghép",
    example: "He needs a kidney transplant.",
  },
  {
    id: 56,
    word: "variety",
    ipa: "/vəˈraɪ.ə.ti/",
    meaning: "sự đa dạng, nhiều loại",
    example: "The store offers a variety of goods.",
  },
  {
    id: 57,
    word: "resident",
    ipa: "/ˈrez.ɪ.dənt/",
    meaning: "cư dân",
    example: "She is a resident of this city.",
  },
  {
    id: 58,
    word: "promotion",
    ipa: "/prəˈməʊ.ʃən/",
    meaning: "sự thăng chức, quảng bá",
    example: "He got a promotion at work.",
  },
  {
    id: 59,
    word: "fill out",
    ipa: "/fɪl aʊt/",
    meaning: "điền vào (đơn)",
    example: "Please fill out this form.",
  },
  {
    id: 60,
    word: "receipt",
    ipa: "/rɪˈsiːt/",
    meaning: "biên lai",
    example: "Keep your receipt for proof of purchase.",
  },
  {
    id: 61,
    word: "engage",
    ipa: "/ɪnˈɡeɪdʒ/",
    meaning: "tham gia, thuê, đính hôn",
    example: "We need to engage the audience.",
  },
  {
    id: 62,
    word: "reside",
    ipa: "/rɪˈzaɪd/",
    meaning: "cư trú",
    example: "He resides in London.",
  },
  {
    id: 63,
    word: "stimulation",
    ipa: "/ˌstɪm.jəˈleɪ.ʃən/",
    meaning: "sự kích thích",
    example: "The brain needs mental stimulation.",
  },
  {
    id: 64,
    word: "representative",
    ipa: "/ˌrep.rɪˈzen.tə.tɪv/",
    meaning: "người đại diện",
    example: "Contact our customer representative.",
  },
  {
    id: 65,
    word: "permission",
    ipa: "/pəˈmɪʃ.ən/",
    meaning: "sự cho phép",
    example: "You need permission to enter.",
  },
  {
    id: 66,
    word: "certified",
    ipa: "/ˈsɜː.tɪ.faɪd/",
    meaning: "được chứng nhận",
    example: "She is a certified accountant.",
  },
  {
    id: 67,
    word: "determine",
    ipa: "/dɪˈtɜː.mɪn/",
    meaning: "xác định, quyết định",
    example: "We need to determine the cause.",
  },
  {
    id: 68,
    word: "upcoming",
    ipa: "/ˈʌpˌkʌm.ɪŋ/",
    meaning: "sắp tới",
    example: "We are preparing for the upcoming event.",
  },
  {
    id: 69,
    word: "dependable",
    ipa: "/dɪˈpen.də.bəl/",
    meaning: "đáng tin cậy",
    example: "He is a very dependable friend.",
  },
  {
    id: 70,
    word: "reminder",
    ipa: "/rɪˈmaɪn.dər/",
    meaning: "lời nhắc",
    example: "This is a reminder about the meeting.",
  },
  {
    id: 71,
    word: "surrounding",
    ipa: "/səˈraʊn.dɪŋ/",
    meaning: "xung quanh, bao quanh",
    example: "The surrounding area is beautiful.",
  },
  {
    id: 72,
    word: "opposition",
    ipa: "/ˌɒp.əˈzɪʃ.ən/",
    meaning: "sự phản đối, phe đối lập",
    example: "There was strong opposition to the plan.",
  },
  {
    id: 73,
    word: "adjust",
    ipa: "/əˈdʒʌst/",
    meaning: "điều chỉnh",
    example: "Adjust the volume if it is too loud.",
  },
  {
    id: 74,
    word: "durable",
    ipa: "/ˈdʒʊə.rə.bəl/",
    meaning: "bền",
    example: "This fabric is very durable.",
  },
  {
    id: 75,
    word: "rave review",
    ipa: "/reɪv rɪˈvjuː/",
    meaning: "đánh giá khen ngợi hết lời",
    example: "The movie received rave reviews.",
  },
  {
    id: 76,
    word: "nutrition",
    ipa: "/njuːˈtrɪʃ.ən/",
    meaning: "dinh dưỡng",
    example: "Good nutrition is essential for health.",
  },
  {
    id: 77,
    word: "justify",
    ipa: "/ˈdʒʌs.tɪ.faɪ/",
    meaning: "biện minh",
    example: "You cannot justify such behavior.",
  },
  {
    id: 78,
    word: "criticise",
    ipa: "/ˈkrɪt.ɪ.saɪz/",
    meaning: "chỉ trích",
    example: "Don't criticise what you don't understand.",
  },
  {
    id: 79,
    word: "inconvenience",
    ipa: "/ˌɪn.kənˈviː.ni.əns/",
    meaning: "sự bất tiện",
    example: "We apologize for the inconvenience.",
  },
  {
    id: 80,
    word: "anticipate",
    ipa: "/ænˈtɪs.ɪ.peɪt/",
    meaning: "dự đoán, mong đợi",
    example: "We anticipate a large crowd.",
  },
];

// --- QUẢN LÝ TRẠNG THÁI (STATE) ---
let currentVocabList = [...vocabularyData];
let learnedIds = JSON.parse(localStorage.getItem("learnedWords")) || [];
let currentIndex = 0; // Index Flashcard

// Biến cho phần Practice Quiz
let quizIndex = 0;
let wrongAnswers = [];
let isReviewMode = false;

// Biến cho phần Context Quiz
let contextIndex = 0;

// --- DOM ELEMENTS ---
// Navigation
const navItems = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll(".section");

// Flashcard
const flashcard = document.getElementById("flashcard");
const elWord = document.getElementById("vocab-word");
const elIpa = document.getElementById("vocab-ipa");
const elMeaning = document.getElementById("vocab-meaning");
const elExample = document.getElementById("vocab-example");
const elCounter = document.getElementById("card-counter");
const btnSpeak = document.getElementById("btn-speak");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const btnShuffle = document.getElementById("btn-shuffle");
const btnMarkLearned = document.getElementById("btn-mark-learned");
const inputJump = document.getElementById("jump-input");
const btnJump = document.getElementById("btn-jump");

// Practice Quiz
const quizWordEl = document.getElementById("quiz-word");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");
const btnNextQuiz = document.getElementById("btn-next-quiz");
const wrongCountEl = document.getElementById("wrong-count");
const btnReviewMistakes = document.getElementById("btn-review-mistakes");
const quizModeLabel = document.getElementById("quiz-mode-label");

// Context Quiz (ĐIỀN TỪ) - CẬP NHẬT BIẾN
const contextSentenceEl = document.getElementById("context-sentence");
const contextOptionsEl = document.getElementById("context-options");
const contextFeedbackEl = document.getElementById("context-feedback");
const contextCounterEl = document.getElementById("context-counter");
const btnNextContextAuto = document.getElementById("btn-next-context-auto");
const btnRestartContext = document.getElementById("btn-restart-context");
// Các nút mới thêm
const btnContextPrev = document.getElementById("btn-context-prev");
const btnContextNext = document.getElementById("btn-context-next");

// Progress
const progressPercentEl = document.getElementById("progress-percent");
const learnedCountEl = document.getElementById("learned-count");
const totalCountEl = document.getElementById("total-count");
const btnViewLearned = document.getElementById("btn-view-learned");
const learnedListBox = document.getElementById("learned-list-container");
const learnedListContent = document.getElementById("learned-list-content");
const btnCloseList = document.getElementById("btn-close-list");
const btnReset = document.getElementById("btn-reset");
const circularProgress = document.querySelector(".circular-progress");

// --- KHỞI TẠO ---
window.addEventListener("DOMContentLoaded", () => {
  loadFlashcard(currentIndex);
  updateProgressUI();

  // Khởi tạo các bài tập
  loadPracticeQuiz();
  loadContextQuiz();
});

// --- CHỨC NĂNG 1: NAVIGATION (CHUYỂN TAB) ---
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");

    const targetId = item.getAttribute("data-target");
    sections.forEach((sec) => sec.classList.remove("active-section"));
    document.getElementById(targetId).classList.add("active-section");

    if (targetId === "home") window.scrollTo(0, 0);
    // Nếu chuyển sang tab writing thì load lại để đảm bảo cập nhật
    if (targetId === "writing") loadContextQuiz();
  });
});

window.navigateTo = (targetId) => {
  document.querySelector(`nav ul li[data-target="${targetId}"]`).click();
};

// --- CHỨC NĂNG 2: FLASHCARD ---
function loadFlashcard(index) {
  const data = currentVocabList[index];
  flashcard.classList.remove("flipped");
  elWord.textContent = data.word;
  elIpa.textContent = data.ipa;
  elMeaning.textContent = data.meaning;
  elExample.textContent = `"${data.example}"`;
  elCounter.textContent = `${index + 1}/${currentVocabList.length}`;

  if (learnedIds.includes(data.id)) {
    btnMarkLearned.textContent = "🎉 Đã thuộc từ này";
    btnMarkLearned.disabled = true;
    btnMarkLearned.classList.replace("btn-success", "btn-secondary");
  } else {
    btnMarkLearned.textContent = "✅ Đã thuộc từ này";
    btnMarkLearned.disabled = false;
    btnMarkLearned.classList.replace("btn-secondary", "btn-success");
  }
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

btnSpeak.addEventListener("click", (e) => {
  e.stopPropagation();
  const utterance = new SpeechSynthesisUtterance(
    currentVocabList[currentIndex].word
  );
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
});

btnNext.addEventListener("click", () => {
  if (currentIndex < currentVocabList.length - 1) {
    currentIndex++;
    loadFlashcard(currentIndex);
  } else {
    currentIndex = 0;
    loadFlashcard(currentIndex);
  }
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadFlashcard(currentIndex);
  } else {
    currentIndex = currentVocabList.length - 1;
    loadFlashcard(currentIndex);
  }
});

btnJump.addEventListener("click", () => {
  const val = parseInt(inputJump.value);
  if (val >= 1 && val <= currentVocabList.length) {
    currentIndex = val - 1;
    loadFlashcard(currentIndex);
    inputJump.value = "";
  } else {
    alert(`Vui lòng nhập số từ 1 đến ${currentVocabList.length}`);
  }
});

btnShuffle.addEventListener("click", () => {
  for (let i = currentVocabList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentVocabList[i], currentVocabList[j]] = [
      currentVocabList[j],
      currentVocabList[i],
    ];
  }
  currentIndex = 0;
  loadFlashcard(currentIndex);

  const originalText = btnShuffle.innerHTML;
  btnShuffle.innerHTML = "Đã trộn!";
  setTimeout(() => (btnShuffle.innerHTML = originalText), 1000);
});

btnMarkLearned.addEventListener("click", (e) => {
  e.stopPropagation();
  const currentItem = currentVocabList[currentIndex];
  if (!learnedIds.includes(currentItem.id)) {
    learnedIds.push(currentItem.id);
    localStorage.setItem("learnedWords", JSON.stringify(learnedIds));
    updateProgressUI();
    loadFlashcard(currentIndex);
  }
});

// --- CHỨC NĂNG 3: PRACTICE QUIZ ---
function loadPracticeQuiz() {
  quizFeedbackEl.textContent = "";
  quizOptionsEl.innerHTML = "";
  btnNextQuiz.style.display = "none";

  let sourceList = isReviewMode ? wrongAnswers : vocabularyData;
  if (isReviewMode && wrongAnswers.length === 0) {
    isReviewMode = false;
    quizModeLabel.style.display = "none";
    alert("Bạn đã hoàn thành các câu sai!");
    loadPracticeQuiz();
    return;
  }

  if (quizIndex >= sourceList.length) quizIndex = 0;

  const questionData = sourceList[quizIndex];
  quizWordEl.textContent = questionData.word;

  let options = [questionData];
  while (options.length < 4) {
    const randomItem =
      vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (!options.some((o) => o.id === randomItem.id)) options.push(randomItem);
  }
  options.sort(() => Math.random() - 0.5);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.meaning;
    btn.onclick = () => checkQuizAnswer(opt, questionData, btn);
    quizOptionsEl.appendChild(btn);
  });
}

function checkQuizAnswer(selected, correct, btnElement) {
  const allBtns = quizOptionsEl.querySelectorAll(".option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (selected.id === correct.id) {
    btnElement.classList.add("correct");
    quizFeedbackEl.textContent = "Chính xác! 🎉";
    quizFeedbackEl.style.color = "var(--success)";

    if (isReviewMode) {
      wrongAnswers = wrongAnswers.filter((w) => w.id !== correct.id);
      updateWrongCount();
    }
  } else {
    btnElement.classList.add("wrong");
    quizFeedbackEl.textContent = `Sai rồi! Đáp án là: ${correct.meaning}`;
    quizFeedbackEl.style.color = "var(--error)";
    allBtns.forEach((b) => {
      if (b.textContent === correct.meaning) b.classList.add("correct");
    });
    if (!wrongAnswers.some((w) => w.id === correct.id)) {
      wrongAnswers.push(correct);
      updateWrongCount();
    }
  }
  btnNextQuiz.style.display = "inline-block";
}

btnNextQuiz.addEventListener("click", () => {
  if (!isReviewMode) {
    quizIndex = Math.floor(Math.random() * vocabularyData.length);
  } else {
    quizIndex = 0;
  }
  loadPracticeQuiz();
});

function updateWrongCount() {
  wrongCountEl.textContent = wrongAnswers.length;
  btnReviewMistakes.disabled = wrongAnswers.length === 0;
}

btnReviewMistakes.addEventListener("click", () => {
  isReviewMode = true;
  quizModeLabel.style.display = "inline-block";
  quizIndex = 0;
  loadPracticeQuiz();
});

// --- CHỨC NĂNG 4: CONTEXT QUIZ (ĐIỀN TỪ) ---
function loadContextQuiz() {
  // Reset UI
  contextFeedbackEl.textContent = "";
  contextOptionsEl.innerHTML = "";
  btnNextContextAuto.style.display = "none";
  btnRestartContext.style.display = "none";
  contextSentenceEl.style.display = "block";

  // 1. Logic nút điều hướng (CẬP NHẬT)
  // Khóa nút Previous nếu ở câu đầu
  btnContextPrev.disabled = contextIndex === 0;
  // Khóa nút Next nếu ở câu cuối
  btnContextNext.disabled = contextIndex === vocabularyData.length - 1;

  // 2. Kiểm tra hoàn thành (nếu đi quá số lượng)
  if (contextIndex >= vocabularyData.length) {
    contextSentenceEl.innerHTML = "🎉 Bạn đã hoàn thành hết danh sách.";
    contextCounterEl.textContent = `${vocabularyData.length}/${vocabularyData.length}`;
    btnRestartContext.style.display = "inline-block";
    return;
  }

  const data = vocabularyData[contextIndex];
  contextCounterEl.textContent = `${contextIndex + 1}/${vocabularyData.length}`;

  // Regex thay thế từ
  const regex = new RegExp(`\\b${data.word}\\b`, "gi");
  if (!data.example.match(regex)) {
    // Nếu câu lỗi không tìm thấy từ, tự động next
    console.log("Skipping sentence due to mismatch:", data.word);
    if (contextIndex < vocabularyData.length - 1) {
      contextIndex++;
      loadContextQuiz();
    }
    return;
  }

  const hiddenSentence = data.example.replace(
    regex,
    `<span class="blank-highlight">_____</span>`
  );
  contextSentenceEl.innerHTML = hiddenSentence;

  // Tạo đáp án
  let options = [data];
  while (options.length < 4) {
    const randomItem =
      vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (!options.some((o) => o.id === randomItem.id)) options.push(randomItem);
  }
  options.sort(() => Math.random() - 0.5);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.word;
    btn.onclick = () => checkContextAnswer(opt.id, data.id, data.word, btn);
    contextOptionsEl.appendChild(btn);
  });
}

function checkContextAnswer(selectedId, correctId, correctWord, btnElement) {
  const allBtns = contextOptionsEl.querySelectorAll(".option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (selectedId === correctId) {
    btnElement.classList.add("correct");
    contextFeedbackEl.textContent = "Chính xác!";
    contextFeedbackEl.style.color = "var(--success)";

    // Điền từ vào chỗ trống
    const blank = contextSentenceEl.querySelector(".blank-highlight");
    if (blank) {
      blank.textContent = correctWord;
      blank.classList.add("filled");
    }

    // Hiện nút Next (nếu muốn next thủ công)
    if (contextIndex < vocabularyData.length - 1) {
      btnNextContextAuto.style.display = "inline-block";
    }
  } else {
    btnElement.classList.add("wrong");
    contextFeedbackEl.textContent = `Sai rồi! Đáp án là: ${correctWord}`;
    contextFeedbackEl.style.color = "var(--error)";
    allBtns.forEach((b) => {
      if (b.textContent === correctWord) b.classList.add("correct");
    });
  }
}

// Event Listeners cho Context
btnNextContextAuto.addEventListener("click", () => {
  if (contextIndex < vocabularyData.length - 1) {
    contextIndex++;
    loadContextQuiz();
  }
});

btnRestartContext.addEventListener("click", () => {
  contextIndex = 0;
  loadContextQuiz();
});

// --- SỰ KIỆN MỚI CHO NÚT ĐIỀU HƯỚNG CONTEXT ---
btnContextPrev.addEventListener("click", () => {
  if (contextIndex > 0) {
    contextIndex--;
    loadContextQuiz();
  }
});

btnContextNext.addEventListener("click", () => {
  if (contextIndex < vocabularyData.length - 1) {
    contextIndex++;
    loadContextQuiz();
  }
});

// --- CHỨC NĂNG 5: PROGRESS ---
function updateProgressUI() {
  const learnedCount = learnedIds.length;
  const total = vocabularyData.length;
  learnedCountEl.textContent = learnedCount;
  totalCountEl.textContent = total;

  const percent = Math.round((learnedCount / total) * 100);
  progressPercentEl.textContent = `${percent}%`;

  circularProgress.style.background = `conic-gradient(
    var(--success) ${percent * 3.6}deg,
    #cadcff ${percent * 3.6}deg
  )`;
}

btnViewLearned.addEventListener("click", () => {
  learnedListContent.innerHTML = "";
  if (learnedIds.length === 0) {
    learnedListContent.innerHTML =
      "<p style='padding:10px; text-align:center'>Chưa có từ nào.</p>";
  } else {
    learnedIds.forEach((id) => {
      const item = vocabularyData.find((v) => v.id === id);
      if (item) {
        const li = document.createElement("li");
        li.className = "learned-item";
        li.innerHTML = `
          <span class="learned-word">${item.word}</span>
          <span class="learned-meaning">${item.meaning}</span>
        `;
        learnedListContent.appendChild(li);
      }
    });
  }
  learnedListBox.style.display = "block";
});

btnCloseList.addEventListener("click", () => {
  learnedListBox.style.display = "none";
});

btnReset.addEventListener("click", () => {
  if (confirm("Bạn có chắc muốn xóa toàn bộ tiến độ?")) {
    learnedIds = [];
    localStorage.removeItem("learnedWords");
    updateProgressUI();
    loadFlashcard(currentIndex);
    alert("Đã reset!");
  }
});
