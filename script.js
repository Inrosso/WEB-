const timelineData = [
    {
        id: 1,
        year: "15 000 лет до н.э.",
        title: "Палеолитическая стоянка «Егошиха»",
        period: "ancient",
        shortDescription: "Самое древнее поселение на территории современной Перми.",
        fullDescription: "В черте города изучено более 130 археологических памятников, самый древний из которых — палеолитическая стоянка «Егошиха» возрастом около 15 тысяч лет до н. э.. Обнаруженные здесь скребки, долотовидные орудия, острия, ножевидные пластины, скобели и резцы свидетельствуют, что древние обитатели этих мест охотились на северных оленей и лошадей. Это было не временное стойбище, а долговременное поселение, жители которого испытывали нехватку сырья и бережно использовали каменные орудия.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80"
    },
    {
        id: 2,
        year: "VIII-III вв. до н.э.",
        title: "Пермский звериный стиль",
        period: "ancient",
        shortDescription: "Уникальное искусство древних уральских племён.",
        fullDescription: "В VIII—III веках до н. э. в Среднем Прикамье расцвело уникальное явление — «пермский звериный стиль». Мастера из племён ананьинской археологической культуры украшали костяные и роговые гребни, бронзовые пряжки и подвески стилизованными изображениями лосей, медведей, хищных птиц, а позже — волков, собак и змей. Это искусство стало прародителем для последующего творчества пермских народов — коми и удмуртов, сформировавшихся здесь в начале новой эры.",
        image: "https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 3,
        year: "1723",
        title: "Основание Перми",
        period: "imperial",
        shortDescription: "Заложен Егошихинский медеплавильный завод — день рождения города.",
        fullDescription: "История современной Перми началась в ходе масштабных преобразований Петра I. Государству, ведшему Северную войну со Швецией, были остро необходимы новые источники металла. В 1720 году на Урал для строительства заводов был направлен капитан-поручик артиллерии, учёный и сподвижник царя Василий Никитич Татищев. Он выбрал место у слияния полноводной Камы и небольшой речки Егошихи. Выбор был идеален: близость медной руды, судоходной реки для вывоза продукции, удобный узкий и глубокий лог для постройки плотины и богатые лесные массивы для топлива. 4 (15) мая 1723 года состоялась закладка Егошихинского (Ягошихинского) медеплавильного завода, и эта дата считается официальным днём рождения Перми.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 4,
        year: "1781",
        title: "Становление губернской столицы",
        period: "imperial",
        shortDescription: "Пермь стала центром Пермского наместничества по указу Екатерины II.",
        fullDescription: "Следующая судьбоносная веха была связана с Екатериной II. После подавления восстания Емельяна Пугачёва потребовалась административная реформа на Урале. Казанский губернатор князь Платон Мещерский, обследовавший Прикамье в 1778 году, указал на Егошихинский завод как на идеальное место для нового губернского центра благодаря его расположению на Каме и примерному равенству расстояний до Казани и Тобольска. 16 ноября 1780 года императрица подписала указ: «Город губернский для Пермского наместничества назначить в сем месте, наименовав оный город Пермь». 18 октября 1781 года состоялось торжественное открытие города и наместничества. Так искусственно созданный административный центр получил свой высокий статус.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 5,
        year: "1878",
        title: "Строительство Уральской железной дороги",
        period: "imperial",
        shortDescription: "Пермь становится важнейшим транспортным узлом Урала.",
        fullDescription: "В XIX столетии Пермь уверенно наращивала экономическую мощь, став важнейшим транспортным и торговым узлом Урала. Главным товаром была соль, добываемая в Усолье и Соликамске. По Каме и её притоку Чусовой отправляли железо, медь и металлические изделия уральских заводов в центральную Россию. Ключевым событием для развития стало строительство Уральской железной дороги, прошедшей через Пермь в 1878 году. Одновременно развивалась промышленность. В 1858 году в устье речки Данилихи английский подданный Гуллет построил механический завод по производству речных буксиров.",
        image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 6,
        year: "1918-1919",
        title: "Гражданская война в Перми",
        period: "soviet",
        shortDescription: "Трагические события Гражданской войны в городе.",
        fullDescription: "Гражданская война обернулась для Перми глубокой трагедией. В ночь с 12 на 13 июня 1918 года в окрестностях города был тайно расстрелян великий князь Михаил Александрович, брат Николая II. Эта расправа, инициированная местными властями, стала символическим актом, поставившим точку в истории династии Романовых, начало которой также было связано с пермской землёй. В декабре 1918 года войска адмирала Александра Колчака в ходе общего наступления белых армий на запад без боя заняли Перми. Это событие, получившее в советской историографии название «Пермская катастрофа», стало крупнейшей победой белых. Однако в июле 1919 года, после перелома в ходе войны, Красная Армия вновь заняла Пермь.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 7,
        year: "1940",
        title: "Переименование в Молотов",
        period: "soviet",
        shortDescription: "Город на 17 лет потерял историческое имя.",
        fullDescription: "В советский период Пермь стала мощным индустриальным центром. В 1938 году город стал административным центром Пермской области в составе РСФСР. В этот же период город на 17 лет потерял своё историческое имя: 8 марта 1940 года он был переименован в Молотов в честь советского политика Вячеслава Молотова. Это было частью общей тенденции увековечивания имён партийных руководителей. Великая Отечественная война коренным образом изменила облик города. В 1941-1942 годах в Молотовскую область были эвакуированы десятки крупных заводов из европейской части СССР. Город превратился в мощный арсенал, выпускавший моторы, артиллерийские системы, боеприпасы.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 8,
        year: "1957",
        title: "Возвращение исторического названия",
        period: "soviet",
        shortDescription: "Городу вернули имя Пермь.",
        fullDescription: "Послевоенные годы продолжилось активное развитие. В 1955 году была построена Камская ГЭС, в 1958 году введена в эксплуатацию первая очередь Пермского нефтеперерабатывающего завода (ныне «Лукойл-Пермнефтеоргсинтез»). Историческое название городу вернули 2 октября 1957 года. В 1967 году завершилось строительство Коммунального моста через Каму, связавшего центр с правобережьем. В 1969 году был построен новый цирк. За успехи в развитии промышленности 22 января 1971 года город Пермь был награждён орденом Ленина.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80"
    },
    {
        id: 9,
        year: "2005",
        title: "Образование Пермского края",
        period: "modern",
        shortDescription: "Пермь стала столицей нового субъекта Федерации.",
        fullDescription: "Новейший этап истории города начался в 2005 году, когда в результате объединения Пермской области и Коми-Пермяцкого автономного округа был образован Пермский край, административным центром которого стала Пермь. Современная Пермь — это крупный промышленный, научный, культурный и логистический центр с населением свыше миллиона человек. Город продолжает развивать свою инфраструктуру, образование и культуру. Восстанавливаются храмы, строятся новые спортивные комплексы и общественные пространства. В 2023 году Пермь торжественно отметила своё 300-летие.",
        image: "https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
];

const periods = {
    "ancient": "Древнее Прикамье",
    "imperial": "Имперский период",
    "soviet": "Советский период",
    "modern": "Современность"
};


document.addEventListener('DOMContentLoaded', function() {
    initTimeline();
    initFilters();
    initModal();
    initScrollEffects();
    initBackToTop();
    
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
        <div class="modal-date">${event.year}</div>
        <div class="modal-image" style="background-image: url('${event.image}')"></div>
        <div class="modal-text">${event.fullDescription}</div>
    `;
    
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

function getRandomImage(category) {
    const images = {
        ancient: [
            'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80',
            'https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80'
        ],
        imperial: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
            'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        ],
        soviet: [
            'https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        ],
        modern: [
            'https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    };
    
    const categoryImages = images[category] || images.ancient;
    return categoryImages[Math.floor(Math.random() * categoryImages.length)];
}

timelineData.forEach(event => {
    if (!event.image) {
        event.image = getRandomImage(event.period);
    }
});