// ============ (Лабораторная №1) ============
// const button = document.getElementById('somebutton');

// button.addEventListener('click', () => {
    // alert('Благодарю.');
// });





// ============ (Лабораторная №2) ============

// == AppConfig == 
const appConfig = {
	appTitle: "Учёт клиентов сервиса",
	defaultStatus: "new",
	minValueForFilter: 800
};

let actionCount = 0;

actionCount += 3;

appConfig.minValueForFilter = 1200;

console.log("actionCount:", actionCount);
console.log("appConfig:", appConfig);


// == Сущности == 
const entities = [
  {
    id: 1,
    title: "ООО 'Солнце'",
    value: 19000,
    status: "new",
    createdAt: "2026-01-15"
  },
  {
    id: 2,
    title: "Иванов Иван Иванович",
    value: 75000,
    status: "new",
    createdAt: "2026-02-10"
  },
  {
    id: 3,
    title: "Вазовский Илья Геннадьевич",
    value: 17500,
    status: "new",
    createdAt: "2026-03-01"
  },
  {
    id: 4,
    title: "ООО 'Верблюжий горб'",
    value: 65000,
    status: "old",
    createdAt: "2026-03-15"
  },
  {
    id: 5,
    title: "Петрова Анна Сергеевна",
    value: 12000,
    status: "old",
    createdAt: "2026-03-01"
  },
  {
    id: 6,
    title: "Антеннов Михаил Анатольевич",
    value: 20000,
    status: "new",
    createdAt: "2026-04-01"
  }
];

console.log("Сущности предметной области (клиенты):");
console.log(entities);

// == Строчки и т.д. ==
const inputMinValue = "800";

const minValue = Number(inputMinValue);

if (Number.isNaN(minValue)) {
  console.log("Это NaN.");
} else {
  console.log("Корректное числовое значение:", minValue);
}

// == Проверка на возраст == 

const userAge = 19;
const isBlocked = false;

const hasAccess = userAge >= 18 && userAge < 65 && !isBlocked;

console.log("Доступ разрешён:", hasAccess);

// == Ветвление логики ==

switch (entities[2].status) {
  case "new":
    console.log("Статус: Новая запись");
    break;
  case "old":
    console.log("Статус: Старая запись");
    break;
  default:
    console.log("Статус: Неизвестный статус");
}

let category;
if (entities[2].value >= 1000) {
  category = "Высокое значение";
} else if (entities[2].value >= 700) {
  category = "Среднее значение";
} else {
  category = "Низкое значение";
}
console.log("Категория по значению:", category);

// == Подсчёт сущностей == 

let newStatusCount = 0;

for (let i = 0; i < entities.length; i++) {
  if (entities[i].status === "new") {
    newStatusCount++;
  }
}

console.log("Количество сущностей со статусом 'new':", newStatusCount);

// == Финалочка == 

const output = document.getElementById('output');
	function renderEntities(list) { // спасибо той работе на лекцию
		if (!list || list.length === 0) {
			output.textContent = "Записей нет(";
			return;
		}
		let result = "";
		for (let i = 0; i < list.length; i++) {
			const item = list[i];
			result += `ID: ${item.id} | Статус: ${item.status} | Название: ${item.title} | Значение: ${item.value} | Дата: ${item.createdAt}\n`;
		}
		output.textContent = result;
	}
	function showAll() {
		renderEntities(entities);
	}
	function showNewOnly() {
		const filtered = [];
		for (let i = 0; i < entities.length; i++) {
			if (entities[i].status === "new") {
				filtered.push(entities[i]);
			}
		}
		renderEntities(filtered);
	}
// const btnAll = document.getElementById('btnAll');
// const btnNew = document.getElementById('btnNew');

// btnAll.addEventListener('click', showAll);
// btnNew.addEventListener('click', showNewOnly);
	
// Статистика
const info = {
	isCorrectData: "Не знаю",
	countEntities: 0,
	sumValue: 0,
	maxValue: 0,
	sumStatusNew: 0,
	filterValue: 0
}

let allEntitiesNow = 0;
let maxValueCheck = 0;
let sumValueCheck = 0;

for (let i = 0; i < entities.length; i++) {
	allEntitiesNow++;
	console.log("Просмотр сущности ", i, "...")
	maxValueCheck = Math.max(entities[i].value, maxValueCheck)
	sumValueCheck += entities[i].value
	console.log("maxValueCheck теперь равно", maxValueCheck, ", а sumValueCheck —", sumValueCheck)
};
info.isCorrectData = "Данные корректны"
info.countEntities = allEntitiesNow;
info.sumValue = sumValueCheck;
info.maxValue = maxValueCheck;
info.sumStatusNew = newStatusCount;
const statistics = document.getElementById('btnStats');
function showStats() {
	result = `	${info.isCorrectData}
	Количество сущностей: ${info.countEntities}
	Сумма value: ${info.sumValue}
	Максимальный value: ${info.maxValue}
	Количество сущностей с 'new': ${info.sumStatusNew}
	Фильтр: ${info.filterValue}`
	
	output.textContent = result;
}
// btnStats.addEventListener('click', showStats);

// Я неправильно понял задание и решил сделать всё сложным путём (я попытался сделать статистику в первую очередь)
// Мне жалко удалять этот код, ведь я старался над ним.
// const statsText = `— Статистика —
	// ${info.isCorrectData}
	// Количество сущностей: ${info.countEntities}
	// Сумма value: ${info.sumValue}
	// Максимальный value: ${info.maxValue}
	// Количество сущностей с 'new': ${info.sumStatusNew}
	// Фильтр: ${info.filterValue}`
// const statistics = document.getElementById('btnStats');

// statistics.addEventListener('click', () => {
    // alert(statsText);
// });






// ============ (Лабораторная №3) ============

// Задача А1
function calcTotal(a, b){
    let c = a + b;
    return c;
}
console.log(calcTotal(10,5));

// Задача А2
function formatRecord(id, title, status){
    return `#${id}: ${title} [${status}]`;
}
console.log(formatRecord(3, "Тестовая запись", "new"));

// Задача Б1
const values3 = [1200, 500, 800, 1500];
let v = 0;
for (const value of values3){
    v += value;
}
console.log(v);

// Задача Б2
function filtervalues(massive){
    return massive.filter(value => value >= 800);
}
console.log(filtervalues(values3));

// Задача С1
const record = {
    id: 7,
    title: "Запись",
    value: 900,
    status: "done",
    createdAt: "2024-04-14"
}
console.log(record);
record.status = "new";
console.log(record);

// Задача С2
function isNew(record){
    if (record.status ==="new"){
        return true;
    } else {
        return false;
    }
}
console.log(isNew(record));

// Задача Д1
const testItems = [
    { id: 1, value: 800},
    { id: 2, value: 500},
    { id: 3, value: 700},
    { id: 4, value: 1200}
];
function findById(testItems, id) {
  return testItems.find(testItems => testItems.id === id) || null;
}
console.log(findById(testItems,4));

// Задача Д2
function buildStats(testItems) {
  return testItems.reduce((acc, item) => {
    acc.totalCount += 1;
    acc.sumValue += item.value;
    return acc;
  }, { totalCount: 0, sumValue: 0});
}
console.log(buildStats(testItems));

// Задача Е2
console.log(helloFromLogic());

// Задача F1
const msg = document.getElementById('message');
msg.textContent = "DOM работает";

// Задача F2
const li_1 = document.createElement('li');
li_1.textContent = "Система учёта клиентов сервиса \r\n";
const li_2 = document.createElement('li');
li_2.textContent = "Lorem ipsum \r\n";
const li_3 = document.createElement('li');
li_3.textContent = "dolor sit amet"
const demolisting = document.getElementById('demoList');
demolisting.append(li_1,li_2,li_3);

// Массив объектов 
console.log(new_items)

// Функции обработки данных
console.log(filterByStatus(new_items, "new"));
console.log(findById(new_items, 3));
console.log(sortByValueDesc(new_items));
console.log(buildStats(new_items));

// Обработка списка через DOM
const listEl = document.getElementById("list");
function renderList(renderClients){
    listEl.textContent = "";

    for (const client of renderClients) {
        const card = document.createElement("div");
        card.className = "card";
        card.remove();

        const h3 = document.createElement("h3");
        h3.textContent = `${client.title}`;

        const info = document.createElement("p");
        info.textContent = `id=${client.id} | value=${client.value} | status=${client.status} | createdAt=${client.createdAt}`;

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "Удалить";
        btnRemove.dataset.action = "remove";
        btnRemove.dataset.id = String(client.id);
        btnRemove.addEventListener('click', () => {
            const index = new_items.findIndex(item => item.id === client.id);
            if (index !== -1) {
                new_items.splice(index, 1);
                statsStats();
            }
        });

        card.appendChild(h3);
        card.appendChild(info);
        card.appendChild(btnRemove);

        listEl.appendChild(card);
  }
}

// Управление состоянием интерфейса
const button_all_new = document.getElementById('btnAll');
const button_new_new = document.getElementById('btnNew');
const button_sort = document.getElementById('btnSort');
const button_stats_new = document.getElementById('btnStats');

button_all_new.addEventListener('click', () => {
    renderList(new_items);
});

button_new_new.addEventListener('click', () => {
    renderList(filterByStatus(new_items, "new"));
});

button_sort.addEventListener('click', () => {
    renderList(sortByValueDesc(new_items));
});

function statsStats() {
const stats = buildStats_new(new_items);
button_stats_new.addEventListener('click', () => {
    msg.textContent =
    `Всего записей: ${stats.totalCount}\n` +
    `Сумма value: ${stats.sumValue}\n` +
    `Максимум value: ${stats.maxValue}\n` +
    `Количество status="new": ${stats.newCount}`;
});
};
statsStats();
