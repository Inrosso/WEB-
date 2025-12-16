const timelineData = [
    {
        id: 1,
        year: "15 000 лет до н.э.",
        title: "Палеолитическая стоянка «Егошиха»",
        period: "ancient",
        shortDescription: "Самое древнее поселение на территории современной Перми.",
        fullDescription: "В черте города изучено более 130 археологических памятников, самый древний из которых — палеолитическая стоянка «Егошиха» возрастом около 15 тысяч лет до н. э.. Обнаруженные здесь скребки, долотовидные орудия, острия, ножевидные пластины, скобели и резцы свидетельствуют, что древние обитатели этих мест охотились на северных оленей и лошадей. Это было не временное стойбище, а долговременное поселение, жители которого испытывали нехватку сырья и бережно использовали каменные орудия.",
        image: "assets/Ego.jpg"
    },
    {
        id: 2,
        year: "VIII-III вв. до н.э.",
        title: "Пермский звериный стиль",
        period: "ancient",
        shortDescription: "Уникальное искусство древних уральских племён.",
        fullDescription: "В VIII—III веках до н. э. в Среднем Прикамье расцвело уникальное явление — «пермский звериный стиль». Мастера из племён ананьинской археологической культуры украшали костяные и роговые гребни, бронзовые пряжки и подвески стилизованными изображениями лосей, медведей, хищных птиц, а позже — волков, собак и змей. Это искусство стало прародителем для последующего творчества пермских народов — коми и удмуртов, сформировавшихся здесь в начале новой эры.",
        image: "assets/steal.webp"
    },
    {
        id: 3,
        year: "1723",
        title: "Основание Перми",
        period: "imperial",
        shortDescription: "Заложен Егошихинский медеплавильный завод — день рождения города.",
        fullDescription: "История современной Перми началась в ходе масштабных преобразований Петра I. Государству, ведшему Северную войну со Швецией, были остро необходимы новые источники металла. В 1720 году на Урал для строительства заводов был направлен капитан-поручик артиллерии, учёный и сподвижник царя Василий Никитич Татищев. Он выбрал место у слияния полноводной Камы и небольшой речки Егошихи. Выбор был идеален: близость медной руды, судоходной реки для вывоза продукции, удобный узкий и глубокий лог для постройки плотины и богатые лесные массивы для топлива. 4 (15) мая 1723 года состоялась закладка Егошихинского (Ягошихинского) медеплавильного завода, и эта дата считается официальным днём рождения Перми.",
        image: "assets/4.jpg"
    },
    {
        id: 4,
        year: "1781",
        title: "Становление губернской столицы",
        period: "imperial",
        shortDescription: "Пермь стала центром Пермского наместничества по указу Екатерины II.",
        fullDescription: "Следующая судьбоносная веха была связана с Екатериной II. После подавления восстания Емельяна Пугачёва потребовалась административная реформа на Урале. Казанский губернатор князь Платон Мещерский, обследовавший Прикамье в 1778 году, указал на Егошихинский завод как на идеальное место для нового губернского центра благодаря его расположению на Каме и примерному равенству расстояний до Казани и Тобольска. 16 ноября 1780 года императрица подписала указ: «Город губернский для Пермского наместничества назначить в сем месте, наименовав оный город Пермь». 18 октября 1781 года состоялось торжественное открытие города и наместничества. Так искусственно созданный административный центр получил свой высокий статус.",
        image: "assets/5.jpg"
    },
    {
        id: 5,
        year: "1878",
        title: "Строительство Уральской железной дороги",
        period: "imperial",
        shortDescription: "Пермь становится важнейшим транспортным узлом Урала.",
        fullDescription: "В XIX столетии Пермь уверенно наращивала экономическую мощь, став важнейшим транспортным и торговым узлом Урала. Главным товаром была соль, добываемая в Усолье и Соликамске. По Каме и её притоку Чусовой отправляли железо, медь и металлические изделия уральских заводов в центральную Россию. Ключевым событием для развития стало строительство Уральской железной дороги, прошедшей через Пермь в 1878 году. Одновременно развивалась промышленность. В 1858 году в устье речки Данилихи английский подданный Гуллет построил механический завод по производству речных буксиров.",
        image: "assets/rail.jpg"
    },
    {
        id: 6,
        year: "1918-1919",
        title: "Гражданская война в Перми",
        period: "soviet",
        shortDescription: "Трагические события Гражданской войны в городе.",
        fullDescription: "Гражданская война обернулась для Перми глубокой трагедией. В ночь с 12 на 13 июня 1918 года в окрестностях города был тайно расстрелян великий князь Михаил Александрович, брат Николая II. Эта расправа, инициированная местными властями, стала символическим актом, поставившим точку в истории династии Романовых, начало которой также было связано с пермской землёй. В декабре 1918 года войска адмирала Александра Колчака в ходе общего наступления белых армий на запад без боя заняли Перми. Это событие, получившее в советской историографии название «Пермская катастрофа», стало крупнейшей победой белых. Однако в июле 1919 года, после перелома в ходе войны, Красная Армия вновь заняла Пермь.",
        image: "assets/6.jpg"
    },
    {
        id: 7,
        year: "1940",
        title: "Переименование в Молотов",
        period: "soviet",
        shortDescription: "Город на 17 лет потерял историческое имя.",
        fullDescription: "В советский период Пермь стал мощным индустриальным центром. В 1938 году город стал административным центром Пермской области в составе РСФСР. В этот же период город на 17 лет потерял своё историческое имя: 8 марта 1940 года он был переименован в Молотов в честь советского политика Вячеслава Молотова. Это было частью общей тенденции увековечивания имён партийных руководителей. Великая Отечественная война коренным образом изменила облик города. В 1941-1942 годах в Молотовскую область были эвакуированы десятки крупных заводов из европейской части СССР. Город превратился в мощный арсенал, выпускавший моторы, артиллерийские системы, боеприпасы.",
        image: "assets/molotov.jpg"
    },
    {
        id: 8,
        year: "1957",
        title: "Возвращение исторического названия",
        period: "soviet",
        shortDescription: "Городу вернули имя Пермь.",
        fullDescription: "Послевоенные годы продолжилось активное развитие. В 1955 году была построена Камская ГЭС, в 1958 году введена в эксплуатацию первая очередь Пермского нефтеперерабатывающего завода (ныне «Лукойл-Пермнефтеоргсинтез»). Историческое название городу вернули 2 октября 1957 года. В 1967 году завершилось строительство Коммунального моста через Каму, связавшего центр с правобережьем. В 1969 году был построен новый цирк. За успехи в развитии промышленности 22 января 1971 года город Пермь был награждён орденом Ленина.",
        image: "assets/8.jpg"
    },
    {
        id: 9,
        year: "2005",
        title: "Образование Пермского края",
        period: "modern",
        shortDescription: "Пермь стала столицей нового субъекта Федерации.",
        fullDescription: "Новейший этап истории города начался в 2005 году, когда в результате объединения Пермской области и Коми-Пермяцкого автономного округа был образован Пермский край, административным центром которого стала Пермь. Современная Пермь — это крупный промышленный, научный, культурный и логистический центр с населением свыше миллиона человек. Город продолжает развивать свою инфраструктуру, образование и культуру. Восстанавливаются храмы, строятся новые спортивные комплексы и общественные пространства. В 2023 году Пермь торжественно отметила своё 300-летие.",
        image: "assets/9.jpg"
    }
];

const periods = {
    "ancient": "Древнее Прикамье",
    "imperial": "Имперский период",
    "soviet": "Советский период",
    "modern": "Современность"
};

const quizQuestions = [
    {
        question: "Какой самый древний археологический памятник на территории Перми упоминается на сайте?",
        options: [
            "Городище Роданово",
            "Стоянка древнего человека «Егошиха»",
            "Поселение Пермь Великая",
            "Мотовилихинский завод"
        ],
        correctAnswer: 1,
        fact: "Стоянка «Егошиха» датируется возрастом около 15 тысяч лет до н.э. "
    },
    {
        question: "В каком году был основан город Пермь?",
        options: [
            "В 1781 году, когда стал губернским центром",
            "В 1723 году, с закладки медеплавильного завода",
            "В 1878 году, со строительством железной дороги",
            "В 1940 году, при переименовании в Молотов"
        ],
        correctAnswer: 1,
        fact: "Официальной датой основания считается 4 (15) мая 1723 года — закладка Егошихинского медеплавильного завода. "
    },
    {
        question: "Какое уникальное явление искусства древних уральских племён расцвело в Среднем Прикамье в VIII-III веках до н.э.?",
        options: [
            "Пермская деревянная скульптура",
            "Ананьинская керамика",
            "Пермский звериный стиль",
            "Строгановская иконопись"
        ],
        correctAnswer: 2,
        fact: "«Пермский звериный стиль» — это уникальное бронзовое литьё с изображениями животных и мифологических существ."
    },
    {
        question: "Как назывался город Пермь в 1940-1957 годах?",
        options: [
            "Свердловск",
            "Молотов",
            "Киров",
            "Брежнев"
        ],
        correctAnswer: 1,
        fact: "Город был переименован в Молотов в честь советского политика Вячеслава Молотова. Историческое название вернули в 1957 году. "
    },
    {
        question: "Что стало административным центром Пермского края, образованного в 2005 году?",
        options: [
            "Кудымкар",
            "Березники",
            "Соликамск",
            "Пермь"
        ],
        correctAnswer: 3,
        fact: "В 2005 году в результате объединения Пермской области и Коми-Пермяцкого автономного округа был создан Пермский край, столицей которого осталась Пермь."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];


document.addEventListener('DOMContentLoaded', function() {
    initTimeline();
    initFilters();
    initModal();
    initImageModal();
    initColorModal();
    initScrollEffects();
    initBackToTop();
    initInteractiveColors();
    initQuiz();
    
    renderTimeline(timelineData);
    
    setTimeout(() => {
        const firstEvent = document.querySelector('.timeline-item');
        if (firstEvent) {
            firstEvent.classList.add('visible');
        }
    }, 300);
});

function initTimeline() {
    const timelineContainer = document.querySelector('.timeline');
    
    timelineContainer.innerHTML = '';
}

function renderTimeline(events) {
    const timelineContainer = document.querySelector('.timeline');
    
    events.forEach((event, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item period-${event.period}`;
        timelineItem.dataset.id = event.id;
        timelineItem.dataset.period = event.period;
        
        const isEven = index % 2 === 0;
        
        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-year">${event.year}</div>
            <div class="timeline-content">
                <span class="timeline-period">${periods[event.period]}</span>
                <h3 class="timeline-title">${event.title}</h3>
                <p class="timeline-description">${event.shortDescription}</p>
                <div class="read-more">
                    <span>Читать подробнее</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
        
        const readMoreBtn = timelineItem.querySelector('.read-more');
        readMoreBtn.addEventListener('click', () => {
            openModal(event);
        });
        
        const content = timelineItem.querySelector('.timeline-content');
        content.addEventListener('click', () => {
            openModal(event);
        });
    });
    
    activateScrollAnimation();
}

function initFilters() {
    const filterButtons = document.querySelectorAll('.period-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            
            const selectedPeriod = this.dataset.period;
            
            const timelineSection = document.querySelector('.timeline-container');
            const timeline = document.querySelector('.timeline');
            
            timeline.classList.remove('filter-ancient', 'filter-imperial', 'filter-soviet', 'filter-modern');
            
            if (selectedPeriod !== 'all') {
                timeline.classList.add(`filter-${selectedPeriod}`);
            }
            
            const navHeight = document.querySelector('.period-nav').offsetHeight;
            const scrollPosition = timelineSection.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                filterTimeline(selectedPeriod);
            }, 300);
        });
    });
}
function initImageModal() {
    const imageModalOverlay = document.querySelector('.image-modal-overlay');
    const imageModalClose = document.querySelector('.image-modal-close');
    
    imageModalClose.addEventListener('click', closeImageModal);
    imageModalOverlay.addEventListener('click', function(e) {
        if (e.target === imageModalOverlay) {
            closeImageModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModalOverlay.style.display === 'flex') {
            closeImageModal();
        }
    });
}

function initColorModal() {
    const colorModalOverlay = document.querySelector('.color-modal-overlay');
    const colorModalClose = document.querySelector('.color-modal-close');
    
    colorModalClose.addEventListener('click', closeColorModal);
    colorModalOverlay.addEventListener('click', function(e) {
        if (e.target === colorModalOverlay) {
            closeColorModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && colorModalOverlay.style.display === 'flex') {
            closeColorModal();
        }
    });
}

function initInteractiveColors() {
    const colors = document.querySelectorAll('.color');
    
    colors.forEach(color => {
        const colorValue = color.getAttribute('data-color');
        const colorName = color.getAttribute('data-name');
        const colorReason = color.getAttribute('data-reason');
        
        if (colorValue) {
            color.style.backgroundColor = colorValue;
            
            const tooltip = document.createElement('div');
            tooltip.className = 'color-tooltip';
            tooltip.textContent = colorName;
            color.appendChild(tooltip);
            
            color.addEventListener('click', function() {
                openColorModal(colorValue, colorName, colorReason);
            });
            
            color.style.cursor = 'pointer';
        }
    });
}

function openColorModal(colorValue, colorName, colorReason) {
    const colorModalOverlay = document.querySelector('.color-modal-overlay');
    const colorSample = document.getElementById('color-sample');
    const colorNameEl = document.getElementById('color-name');
    const colorReasonEl = document.getElementById('color-reason');
    
    if (colorSample && colorNameEl && colorReasonEl) {
        colorSample.style.backgroundColor = colorValue;
        colorNameEl.textContent = colorName;
        colorReasonEl.textContent = colorReason;
    }
    
    if (colorModalOverlay) {
        colorModalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeColorModal() {
    const colorModalOverlay = document.querySelector('.color-modal-overlay');
    if (colorModalOverlay) {
        colorModalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function openImageModal(imageSrc, title) {
    const imageModalOverlay = document.querySelector('.image-modal-overlay');
    const fullSizeImage = document.querySelector('.full-size-image');
    const imageCaption = document.querySelector('.image-caption');
    
    fullSizeImage.src = imageSrc;
    fullSizeImage.alt = title;
    imageCaption.textContent = title;
    
    imageModalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const imageModalOverlay = document.querySelector('.image-modal-overlay');
    imageModalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function filterTimeline(period) {
    const allEvents = document.querySelectorAll('.timeline-item');
    
    if (period === 'all') {
        allEvents.forEach(event => {
            event.style.display = 'flex';
        });
        
        setTimeout(() => {
            activateScrollAnimation();
        }, 100);
    } else {
        allEvents.forEach(event => {
            event.style.display = 'none';
        });
        
        const filteredEvents = document.querySelectorAll(`.timeline-item[data-period="${period}"]`);
        filteredEvents.forEach(event => {
            event.style.display = 'flex';
        });
        
        setTimeout(() => {
            activateScrollAnimation();
        }, 100);
    }
}

function initModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            closeModal();
        }
    });
}

function openModal(event) {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalContent = document.querySelector('.modal-content');
    
    const periodColor = getPeriodColor(event.period);
    
    modalContent.innerHTML = `
        <span class="modal-period" style="background-color: ${periodColor.backgroundColor}; color: ${periodColor.color}">
            ${periods[event.period]}
        </span>
        <h2 class="modal-title">${event.title}</h2>
        <div class="modal-date period-${event.period}">${event.year}</div>
        <div class="modal-image-container">
            <img src="${event.image}" alt="${event.title}" class="modal-image">
        </div>
        <div class="modal-text">${event.fullDescription}</div>
    `;
    
    const modalImageContainer = modalContent.querySelector('.modal-image-container');
    modalImageContainer.addEventListener('click', () => {
        openImageModal(event.image, event.title);
    });
    
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function getPeriodColor(period) {
    const colors = {
        'ancient': {
            backgroundColor: 'rgba(139, 69, 19, 0.1)',
            color: '#8B4513'
        },
        'imperial': {
            backgroundColor: 'rgba(184, 115, 51, 0.1)',
            color: '#B87333'
        },
        'soviet': {
            backgroundColor: 'rgba(200, 16, 46, 0.1)',
            color: '#C8102E'
        },
        'modern': {
            backgroundColor: 'rgba(0, 183, 235, 0.1)',
            color: '#00B7EB'
        }
    };
    
    return colors[period] || { backgroundColor: '#f0f0f0', color: '#333' };
}

function initQuiz() {
    const totalQuestionsEl = document.getElementById('total-questions');
    const restartBtn = document.getElementById('restart-btn');
    const resultsRestartBtn = document.getElementById('results-restart-btn');
    
    if (totalQuestionsEl) {
        totalQuestionsEl.textContent = quizQuestions.length;
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
    }
    
    if (resultsRestartBtn) {
        resultsRestartBtn.addEventListener('click', restartQuiz);
    }
    
    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const questionTextEl = document.getElementById('question-text');
    const optionsContainer = document.querySelector('.quiz-options');
    const currentQuestionEl = document.getElementById('current-question');
    const nextBtn = document.getElementById('next-btn');
    const feedbackEl = document.getElementById('feedback');
    
    if (!question || !questionTextEl || !optionsContainer) return;
    
    feedbackEl.classList.remove('show', 'correct', 'incorrect');
    feedbackEl.textContent = '';
    nextBtn.disabled = true;
    
    if (currentQuestionEl) {
        currentQuestionEl.textContent = currentQuestionIndex + 1;
    }
    
    questionTextEl.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    updateProgress();
}

function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedbackEl = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    const isCorrect = selectedIndex === question.correctAnswer;
    
    options.forEach((option, index) => {
        option.classList.remove('selected');
        
        if (index === selectedIndex) {
            option.classList.add('selected');
        }
        
        if (index === question.correctAnswer) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    feedbackEl.textContent = isCorrect 
        ? `Правильно! ${question.fact || ''}` 
        : `Неверно. Правильный ответ: ${question.options[question.correctAnswer]}. ${question.fact || ''}`;
    
    feedbackEl.className = `quiz-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    
    if (isCorrect) {
        score++;
        updateScore();
    }
    
    nextBtn.disabled = false;
    nextBtn.addEventListener('click', nextQuestion);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function updateScore() {
    const scoreEl = document.getElementById('score');
    if (scoreEl) {
        scoreEl.textContent = score;
    }
}

function updateProgress() {
}

function showResults() {
    const quizContent = document.querySelector('.quiz-content');
    const resultsContainer = document.getElementById('results-container');
    const resultsScore = document.getElementById('results-score');
    const resultsMessage = document.getElementById('results-message');
    const finalScoreEl = document.getElementById('final-score');
    const maxScoreEl = document.getElementById('max-score');
    
    if (!quizContent || !resultsContainer) return;
    
    quizContent.style.display = 'none';
    
    resultsContainer.classList.add('show');
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    if (resultsScore) resultsScore.textContent = `${score} / ${quizQuestions.length}`;
    if (finalScoreEl) finalScoreEl.textContent = score;
    if (maxScoreEl) maxScoreEl.textContent = quizQuestions.length;
    
    let message = '';
    if (percentage >= 80) {
        message = 'Молодец! Ты отлично знаешь историю Перми!';
    } else if (percentage >= 60) {
        message = 'Молодец! Ты хорошо знаешь основные вехи истории города!';
    } else if (percentage >= 40) {
        message = 'Молодец! Ты знаешь историю Перми, но есть куда расти!';
    } else {
        message = 'Молодец! Ты начал изучение истории Перми! Попробуй ещё раз!';
    }
    
    if (resultsMessage) resultsMessage.textContent = message;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    const quizContent = document.querySelector('.quiz-content');
    const resultsContainer = document.getElementById('results-container');
    const nextBtn = document.getElementById('next-btn');
    
    if (quizContent) quizContent.style.display = 'block';
    if (resultsContainer) resultsContainer.classList.remove('show');
    if (nextBtn) {
        nextBtn.disabled = true;
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    }
    
    updateScore();
    loadQuestion();
}

function initScrollEffects() {
    activateScrollAnimation();
    
    window.addEventListener('scroll', activateScrollAnimation);
}

function activateScrollAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        if (item.style.display === 'none') return;
        
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.85) {
            item.classList.add('visible');
        }
    });
}

function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
}
