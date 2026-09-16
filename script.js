const times = [
    "08:30 – 09:50",
    "10:10 – 11:30",
    "11:50 – 13:10",
    "13:30 – 14:50",
    "15:05 – 16:25"
];

const pairNames = [
    "І",
    "ІІ",
    "ІІІ",
    "IV",
    "V"
];

const days = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця"
];


/* ==========================================
   ФУНКЦІЯ ЗВИЧАЙНОЇ ПАРИ
========================================== */

function lesson(subject, type, room, teachers) {

    return {
        subject: subject,
        type: type,
        room: room,
        teachers: teachers
    };

}


/* ==========================================
   ДВА ПРЕДМЕТИ В ОДНІЙ КОМІРЦІ

   first  = ЧИСЕЛЬНИК
   second = ЗНАМЕННИК
========================================== */

function twoLessons(first, second) {

    return {
        multiple: true,
        first: first,
        second: second
    };

}


/* ==========================================
   СПІЛЬНА ПАРА ДЛЯ ПОТОКУ

   НІКОЛИ НЕ ПЕРЕМИКАЄТЬСЯ
========================================== */

function doublePair(subject, type, room, teachers) {

    return {
        double: true,
        subject: subject,
        type: type,
        room: room,
        teachers: teachers
    };

}


/* ==========================================
   ПМК-21
========================================== */

const PMK21 = {

    "Понеділок": [

        null,

        lesson(
            "Фізичні основи електроніки",
            "лабораторна",
            "119б",
            "доц. Лис Р.М., доц. Лучечко А.П."
        ),

        lesson(
            "Тестув. на проникнення",
            "лабораторна",
            "119а",
            "проф. Пархуць Л.Т., доц. Трушевський В.М."
        ),

        lesson(
            "Операційні системи",
            "лабораторна",
            "045",
            "ас. Стягар Я.О., проф. Пелешко Д.Д."
        ),

        twoLessons(

            lesson(
                "Іноземна мова",
                "практичне",
                "70(д), 266, 73(д), 84(д)",
                "доц. Боднар І.М., доц. Годісь Ю.Я., доц. Сологуб Л.В., ас. Плахтина Н.В."
            ),

            lesson(
                "Основи національного спротиву",
                "",
                "",
                ""
            )

        )

    ],


    "Вівторок": [

        null,

        lesson(
            "Застосування теорії ймовірностей в КБ",
            "лабораторна",
            "265",
            "доц. Квасниця Г.А., доц. Пелюшкевич О.В."
        ),

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        twoLessons(

            lesson(
                "Застосування теорії ймовірностей в КБ",
                "лекція",
                "265",
                "доц. Пелюшкевич О.В."
            ),

            lesson(
                "Тестув. на проникнення",
                "лекція",
                "265",
                ""
            )

        )

    ],


    "Середа": [

        lesson(
            "Іноземна мова",
            "практичне",
            "",
            "підгрупи"
        ),

        lesson(
            "Захист сервісів та підтримка ІТ процесів",
            "лабораторна",
            "272/3",
            "ас. Кузбит Ю.Ю., проф. Пелешко Д.Д."
        ),

        null,

        null,

        null

    ],


    "Четвер": [

        twoLessons(

            lesson(
                "Операційні системи",
                "лекція",
                "265",
                "проф. Пелешко Д.Д."
            ),

            lesson(
                "Захист сервісів та підтримка ІТ процесів",
                "лекція",
                "265",
                "проф. Гутік О.В."
            )

        ),

        lesson(
            "Основи національного спротиву",
            "лекція",
            "439",
            ""
        ),

        null,

        null

    ],


    "П'ятниця": [

        twoLessons(

            lesson(
                "Фізичні основи електроніки",
                "лекція",
                "128(т)",
                "доц. Лучечко А.П."
            ),

            lesson(
                "Скриптові мови програмування",
                "лекція",
                "439",
                "доц. Квасниця Г.А."
            )

        ),

        lesson(
            "Скриптові мови програмування",
            "лабораторна",
            "119а",
            "доц. Квасниця Г.А., ас. Грицишин О.О."
        ),

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        null

    ]

};


/* ==========================================
   ПМК-22
========================================== */

const PMK22 = {

    "Понеділок": [

        null,

        null,

        lesson(
            "Фізичні основи електроніки",
            "лабораторна",
            "119б",
            "доц. Лис Р.М., доц. Лучечко А.П."
        ),

        lesson(
            "Тестув. на проникнення",
            "лабораторна",
            "119а",
            "проф. Пархуць Л.Т., доц. Трушевський В.М."
        ),

        twoLessons(

            lesson(
                "Іноземна мова",
                "практичне",
                "70(д), 266, 73(д), 84(д)",
                "доц. Боднар І.М., доц. Годісь Ю.Я., доц. Сологуб Л.В., ас. Плахтина Н.В."
            ),

            lesson(
                "Основи національного спротиву",
                "",
                "",
                ""
            )

        )

    ],


    "Вівторок": [

        null,

        null,

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        twoLessons(

            lesson(
                "Застосування теорії ймовірностей в КБ",
                "лекція",
                "265",
                "доц. Пелюшкевич О.В."
            ),

            lesson(
                "Тестув. на проникнення",
                "лекція",
                "265",
                ""
            )

        )

    ],


    "Середа": [

        lesson(
            "Іноземна мова",
            "практичне",
            "",
            "підгрупи"
        ),

        lesson(
            "Операційні системи",
            "лабораторна",
            "045",
            "ас. Стягар Я.О., проф. Пелешко Д.Д."
        ),

        null,

        null,

        null

    ],


    "Четвер": [

        twoLessons(

            lesson(
                "Операційні системи",
                "лекція",
                "265",
                "проф. Пелешко Д.Д."
            ),

            lesson(
                "Захист сервісів та підтримка ІТ процесів",
                "лекція",
                "265",
                "проф. Гутік О.В."
            )

        ),

        lesson(
            "Основи національного спротиву",
            "лекція",
            "439",
            ""
        ),

        lesson(
            "Захист сервісів та підтримка ІТ процесів",
            "лабораторна",
            "272/3",
            "ас. Кузбит Ю.Ю., проф. Пелешко Д.Д."
        ),

        lesson(
            "Скриптові мови програмування",
            "лабораторна",
            "119а",
            "доц. Квасниця Г.А., ас. Грицишин О.О."
        ),

        null

    ],


    "П'ятниця": [

        twoLessons(

            lesson(
                "Фізичні основи електроніки",
                "лекція",
                "128(т)",
                "доц. Лучечко А.П."
            ),

            lesson(
                "Скриптові мови програмування",
                "лекція",
                "439",
                "доц. Квасниця Г.А."
            )

        ),

        lesson(
            "Застосування теорії ймовірностей в КБ",
            "лабораторна",
            "265",
            "доц. Квасниця Г.А., доц. Пелюшкевич О.В."
        ),

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        null

    ]

};


/* ==========================================
   ПМК-23
========================================== */

const PMK23 = {

    "Понеділок": [

        null,

        lesson(
            "Тестув. на проникнення",
            "лабораторна",
            "119а",
            "проф. Пархуць Л.Т., доц. Трушевський В.М."
        ),

        lesson(
            "Захист сервісів та підтримка ІТ процесів",
            "лабораторна",
            "272/3",
            "ас. Кузбит Ю.Ю., проф. Пелешко Д.Д."
        ),

        lesson(
            "Фізичні основи електроніки",
            "лабораторна",
            "119б",
            "доц. Лис Р.М., доц. Лучечко А.П."
        ),

        twoLessons(

            lesson(
                "Іноземна мова",
                "практичне",
                "70(д), 266, 73(д), 84(д)",
                "доц. Боднар І.М., доц. Годісь Ю.Я., доц. Сологуб Л.В., ас. Плахтина Н.В."
            ),

            lesson(
                "Основи національного спротиву",
                "",
                "",
                ""
            )

        )

    ],


    "Вівторок": [

        null,

        null,

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        twoLessons(

            lesson(
                "Застосування теорії ймовірностей в КБ",
                "лекція",
                "265",
                "доц. Пелюшкевич О.В."
            ),

            lesson(
                "Тестув. на проникнення",
                "лекція",
                "265",
                ""
            )

        )

    ],


    "Середа": [

        lesson(
            "Іноземна мова",
            "практичне",
            "",
            "підгрупи"
        ),

        lesson(
            "Застосування теорії ймовірностей в КБ",
            "лабораторна",
            "265",
            "доц. Квасниця Г.А., доц. Пелюшкевич О.В."
        ),

        lesson(
            "Операційні системи",
            "лабораторна",
            "045",
            "ас. Стягар Я.О., проф. Пелешко Д.Д."
        ),

        null,

        null

    ],


    "Четвер": [

        twoLessons(

            lesson(
                "Операційні системи",
                "лекція",
                "265",
                "проф. Пелешко Д.Д."
            ),

            lesson(
                "Захист сервісів та підтримка ІТ процесів",
                "лекція",
                "265",
                "проф. Гутік О.В."
            )

        ),

        lesson(
            "Основи національного спротиву",
            "лекція",
            "439",
            ""
        ),

        lesson(
            "Скриптові мови програмування",
            "лабораторна",
            "119а",
            "доц. Квасниця Г.А., ас. Грицишин О.О."
        ),

        null,

        null

    ],


    "П'ятниця": [

        twoLessons(

            lesson(
                "Фізичні основи електроніки",
                "лекція",
                "128(т)",
                "доц. Лучечко А.П."
            ),

            lesson(
                "Скриптові мови програмування",
                "лекція",
                "439",
                "доц. Квасниця Г.А."
            )

        ),

        null,

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        doublePair(
            "ДВВС-002",
            "спільне для потоку",
            "",
            ""
        ),

        null

    ]

};


/* ==========================================
   ВСІ ГРУПИ
========================================== */

const schedules = {

    "ПМК-21": PMK21,
    "ПМК-22": PMK22,
    "ПМК-23": PMK23

};


/* ==========================================
   ПОТОЧНІ ЗНАЧЕННЯ
========================================== */

let currentGroup = "ПМК-21";



function getCurrentDay() {

    const today = new Date();
    const dayNumber = today.getDay();

    const dayMap = {
        1: "Понеділок",
        2: "Вівторок",
        3: "Середа",
        4: "Четвер",
        5: "П'ятниця"
    };

    return dayMap[dayNumber] || "Понеділок";
}

let currentDay = getCurrentDay();

/* ==========================================
   ВИЗНАЧЕННЯ ЧИСЕЛЬНИКА / ЗНАМЕННИКА
========================================== */

/*
   01.09.2026 = перший навчальний тиждень
   Перший тиждень = ЧИСЕЛЬНИК
*/

const firstWeekDate = new Date(2026, 8, 1);

let weekMode = "auto";


function getWeekType() {

    /* Ручний вибір */

    if (weekMode === "numerator") {

        return "numerator";

    }


    if (weekMode === "denominator") {

        return "denominator";

    }


    /* Автоматичний режим */

    const today = new Date();


    /* Беремо тільки дату */

    const currentDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );


    const firstDate = new Date(
        firstWeekDate.getFullYear(),
        firstWeekDate.getMonth(),
        firstWeekDate.getDate()
    );


    /* Різниця між датами */

    const difference =
        currentDate - firstDate;


    /*
       Кількість повних тижнів
       від 01.09.2026
    */

    const weeks =
        Math.floor(
            difference /
            (7 * 24 * 60 * 60 * 1000)
        );


    /*
       0 = ЧИСЕЛЬНИК
       1 = ЗНАМЕННИК
       2 = ЧИСЕЛЬНИК
       3 = ЗНАМЕННИК
       ...
    */

    if (weeks % 2 === 0) {

        return "numerator";

    } else {

        return "denominator";

    }

}


/* ==========================================
   ЕЛЕМЕНТИ HTML
========================================== */

const groupSelect =
    document.getElementById("groupSelect");

const dayNav =
    document.getElementById("dayNav");

const schedule =
    document.getElementById("schedule");


/* ==========================================
   ДНІ
========================================== */

function renderDays() {

    dayNav.innerHTML = "";


    days.forEach(function(day) {

        const button =
            document.createElement("button");


        button.className =
            "day-btn";


        if (day === currentDay) {

            button.classList.add("active");

        }


        button.textContent = day;


        button.addEventListener(
            "click",
            function() {

                currentDay = day;

                renderDays();

                renderSchedule();

            }
        );


        dayNav.appendChild(button);

    });

}


/* ==========================================
   HTML ПРЕДМЕТА
========================================== */

function lessonHTML(item) {

    let html = "";


    /* Назва предмета */

    html += `
        <div class="subject">
            ${item.subject}
        </div>
    `;


    /* Тип заняття */

    if (item.type) {

        html += `
            <span class="type">
                ${item.type}
            </span>
        `;

    }


    /* Аудиторія */

    if (item.room) {

        html += `
            <span class="room">
                ауд. ${item.room}
            </span>
        `;

    }


    /* Викладач */

    if (item.teachers) {

        html += `
            <div class="teachers">
                ${item.teachers}
            </div>
        `;

    }


    return html;

}


/* ==========================================
   ВМІСТ ПАРИ
========================================== */

function createLessonContent(item) {

    /* ==========================================
       ПОРОЖНЯ ПАРА
    ========================================== */

    if (item === null) {

        return `
            <div class="lesson-content">
                <span>Занять немає</span>
            </div>
        `;

    }


    /* ==========================================
       ЧИСЕЛЬНИК / ЗНАМЕННИК
    ========================================== */

    if (item.multiple) {

        const weekType =
            getWeekType();


        let selectedLesson;


        /*
           ЧИСЕЛЬНИК
           показує first
        */

        if (weekType === "numerator") {

            selectedLesson =
                item.first;

        }


        /*
           ЗНАМЕННИК
           показує second
        */

        else {

            selectedLesson =
                item.second;

        }


        return `
            <div class="lesson-content">
                ${lessonHTML(selectedLesson)}
            </div>
        `;

    }


    /* ==========================================
       ЗВИЧАЙНА ПАРА
    ========================================== */

    return `
        <div class="lesson-content">
            ${lessonHTML(item)}
        </div>
    `;

}


/* ==========================================
   ВИВЕДЕННЯ РОЗКЛАДУ
========================================== */

function renderSchedule() {

    schedule.innerHTML = "";


    const lessons =
        schedules[currentGroup][currentDay];


    /*
       Завжди показуємо 5 пар.
       Навіть якщо там null.
    */

    for (let i = 0; i < 5; i++) {

        const item =
            lessons[i];


        const card =
            document.createElement("article");


        /*
           Якщо пари немає
        */

        if (item === null) {

            card.className =
                "lesson empty";

        } else {

            card.className =
                "lesson";

        }


        card.innerHTML = `

            <div class="pair-info">

                <div class="pair-number">
                    ${pairNames[i]} пара
                </div>

                <div class="time">
                    ${times[i]}
                </div>

            </div>


            ${createLessonContent(item)}

        `;


        schedule.appendChild(card);

    }

}


/* ==========================================
   ЗМІНА ГРУПИ
========================================== */

groupSelect.addEventListener(
    "change",
    function() {

        currentGroup =
            groupSelect.value;


        renderSchedule();

    }
);


/* ==========================================
   ІНФОРМАЦІЯ ПРО ТИЖДЕНЬ
========================================== */

function updateWeekInfo() {

    const weekInfo =
        document.getElementById("weekInfo");


    const autoWeekBtn =
        document.getElementById("autoWeekBtn");


    const numeratorBtn =
        document.getElementById("numeratorBtn");


    const denominatorBtn =
        document.getElementById("denominatorBtn");


    const weekType =
        getWeekType();


    /* ==========================================
       ТЕКСТ
    ========================================== */

    if (weekType === "numerator") {

        weekInfo.textContent =
            "📚 Поточний тиждень: ЧИСЕЛЬНИК";

    } else {

        weekInfo.textContent =
            "📚 Поточний тиждень: ЗНАМЕННИК";

    }


    /* ==========================================
       СКИДАЄМО ACTIVE
    ========================================== */

    autoWeekBtn.classList.remove("active");

    numeratorBtn.classList.remove("active");

    denominatorBtn.classList.remove("active");


    /* ==========================================
       ВСТАНОВЛЮЄМО ACTIVE
    ========================================== */

    if (weekMode === "auto") {

        autoWeekBtn.classList.add("active");

    }


    if (weekMode === "numerator") {

        numeratorBtn.classList.add("active");

    }


    if (weekMode === "denominator") {

        denominatorBtn.classList.add("active");

    }

}


/* ==========================================
   КНОПКА АВТОМАТИЧНО
========================================== */

document
    .getElementById("autoWeekBtn")
    .addEventListener(
        "click",
        function() {

            weekMode = "auto";

            updateWeekInfo();

            renderSchedule();

        }
    );


/* ==========================================
   КНОПКА ЧИСЕЛЬНИК
========================================== */

document
    .getElementById("numeratorBtn")
    .addEventListener(
        "click",
        function() {

            weekMode = "numerator";

            updateWeekInfo();

            renderSchedule();

        }
    );


/* ==========================================
   КНОПКА ЗНАМЕННИК
========================================== */

document
    .getElementById("denominatorBtn")
    .addEventListener(
        "click",
        function() {

            weekMode = "denominator";

            updateWeekInfo();

            renderSchedule();

        }
    );


/* ==========================================
   ЗАПУСК САЙТУ
========================================== */

renderDays();

renderSchedule();

updateWeekInfo();
