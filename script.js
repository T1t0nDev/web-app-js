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
	
const btnAll = document.getElementById('btnAll');
const btnNew = document.getElementById('btnNew');

btnAll.addEventListener('click', showAll);
btnNew.addEventListener('click', showNewOnly);
	
	
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

btnStats.addEventListener('click', showStats);

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
