interface Question {
  question: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  parameters: {
    love: number;
    personality: number;
  };
}

const mutateInto = (...items: ({ q: string; a: string[] })[]) => {
  const mutated = items.map(item => ({
    question: item.q,
    answers: item.a.map(answer => ({
      text: answer,
      parameters: {
        love: Math.round(answer.length / 2),
        personality: Number(Math.exp(answer.length).toString().slice(0, 2)) / 10
      }
    }))
  }));

  return mutated as Question[];
}

const questions: Question[] = mutateInto(
  {
    "q": "Какой жанр аниме вам нравится больше всего?",
    "a": [
      "Экшн/Шонен",
      "Романтика/Шодзе",
      "Комедия",
      "Детектив/Триллер"
    ]
  },
  {
    "q": "Какой тип характера парня вам ближе?",
    "a": [
      "Красивый и сильный",
      "Умный и хитрый",
      "Смелый и отважный",
      "Добрый и заботливый"
    ]
  },
  {
    "q": "Какой тип внешности вам нравится больше всего?",
    "a": [
      "Белокурый и синеглазый",
      "Темноволосый и кареглазый",
      "Рыжеволосый и зеленоглазый",
      "Черноволосый и сероглазый"
    ]
  },
  {
    "q": "Какой цвет вам больше всего нравится?",
    "a": [
      "Красный",
      "Синий",
      "Зеленый",
      "Фиолетовый"
    ]
  },
  {
    "q": "Какое ваше любимое блюдо?",
    "a": [
      "Суши",
      "Пицца",
      "Стейк",
      "Салат"
    ]
  },
  {
    "q": "Какое ваше любимое время года?",
    "a": [
      "Весна",
      "Лето",
      "Осень",
      "Зима"
    ]
  },
  {
    "q": "Какое ваше любимое время суток?",
    "a": [
      "Утро",
      "День",
      "Вечер",
      "Ночь"
    ]
  },
  {
    "q": "Какую музыку вы предпочитаете?",
    "a": [
      "Поп",
      "Рок",
      "Классика",
      "Рэп"
    ]
  },
  {
    "q": "Какой вид деятельности вы предпочитаете?",
    "a": [
      "Чтение",
      "Спорт",
      "Игры",
      "Кино"
    ]
  },
  {
    "q": "Какое ваше любимое место?",
    "a": [
      "Пляж",
      "Горы",
      "Город",
      "Дом"
    ]
  },
  {
    "q": "Какой предмет вы бы выбрали на острове?",
    "a": [
      "Нож",
      "Книга",
      "Еда",
      "Вода"
    ]
  },
  {
    "q": "Какой ваш любимый праздник?",
    "a": [
      "Новый год",
      "День рождения",
      "8 Марта",
      "День знаний"
    ]
  },
  {
    "q": "Какое животное вам нравится?",
    "a": [
      "Собака",
      "Кошка",
      "Лев",
      "Пингвин"
    ]
  },
  {
    "q": "Какой бы вы выбрали автомобиль?",
    "a": [
      "Спортивный",
      "Классический",
      "Внедорожник",
      "Электромобиль"
    ]
  },
  {
    "q": "Какой ваш любимый вид спорта?",
    "a": [
      "Футбол",
      "Баскетбол",
      "Теннис",
      "Плавание"
    ]
  },
  {
    "q": "Какой ваш любимый вид активности на свежем воздухе?",
    "a": [
      "Прогулка в парке",
      "Пикник",
      "Кемпинг",
      "Занятия спортом"
    ]
  },
  {
    "q": "Какую обстановку вы предпочитаете в отношениях?",
    "a": [
      "Романтику и внимание",
      "Свободу и независимость",
      "Взаимную поддержку и понимание",
      "Активность и новые впечатления"
    ]
  },
  {
    "q": "Как вы относитесь к животным?",
    "a": [
      "Обожаю животных",
      "Люблю, но не могу жить с ними",
      "Боюсь животных",
      "Нейтральное отношение"
    ]
  },
  {
    "q": "С каким парнем ты видишь себя?",
    "a": [
      "Самостоятельным и независимым",
      "Эмоциональным и чувствительным",
      "Разносторонним",
      "Непредсказуемым"
    ]
  },
  {
    q: 'Твои предпочтения в одежде?',
    a: [
      'Что угодно, но модное и в тренде',
      'Удобная или спортивная одежда',
      'Главное выглядеть стильно и элегантно, но не вычурно',
      'Быть всегда разной',
    ]
  },
  {
    q: 'Твой любимый супергерой...',
    a: [
      'Дэдпул',
      'Железный человек',
      'Человек-паук',
      'Бэтмен',
    ]
  },
  {
    q: 'Твой самый желанный подарок на день рождения',
    a: [
      'Украшения',
      'Романтический ужин',
      'Предложение руки и сердца',
      'Путешествие туда, где еще не бывала',
    ]
  },
  {
    q: 'Как ты можешь описать себя?',
    a: [
      'Ласковая и заботливая',
      'Маленькая принцесса: красивая и гордая',
      'Скромная и беззащитная',
      'Экстравагантная бунтарка',
    ]
  },
  {
    q: 'Твоя фигура',
    a: [
      'Стройная',
      'Полная',
      'Средняя',
      'Другая'
    ]
  },
  {
    q: 'Твой рост',
    a: [
      'Менее 160',
      'От 160 до 170',
      'От 170 до 180',
      'Более 180'
    ]
  },
  {
    q: 'Его рост',
    a: [
      'Менее 170',
      'От 170 до 180',
      'От 180 до 190',
      'Более 190'
    ]
  },
  {
    q: 'Твой знак зодиака',
    a: [
      'Овен, Лев, Стрелец',
      'Телец, Дева, Козерог',
      'Водолей, Близнецы, Весы',
      'Рыбы, Рак, Скорпион'
    ]
  },
  {
    q: 'Твой любимый напиток',
    a: [
      'Кола',
      'Кофе',
      'Чай',
      'Другое'
    ]
  },
  {
    q: 'На какую букву начинается твое имя',
    a: [
      'А-И',
      'Й-П',
      'Р-У',
      'Ф-Я'
    ]
  },
  {
    q: 'Какой герой тебе понравится больше?',
    a: [
      'Прекрасный принц',
      'Главный злодей',
      'Второстепенный персонаж',
      'Никто не понравится',
    ],
  },
  {
    q: 'Каким должно быть его имя?',
    a: [
      'Приятным',
      'Простым и красивым',
      'Мужественным',
      'Популярным'
    ]
  },
  {
    q: 'Парень должен быть из популярного аниме?',
    a: [
      'Конечно',
      'Не обязательно',
      'Наверное',
      "Нет"
    ]
  },
  {
    q: 'Что отличает его от остальных?',
    a: [
      'Широкие плечи',
      'Пронзительный взгляд',
      'Ослепительная улыбка',
      'Сильные руки'
    ]
  },
  {
    q: 'Парень должен быть скорее милым чем мужественным?',
    a: [
      'Ага',
      'Неа',
      "Не важно",
      "Не знаю"
    ]
  },
  {
    q: 'Парень будет любить вас?',
    a: [
      'Конечно',
      "А как же",
      "Однозначно",
      "Нет"
    ]
  },
  {
    q: 'Он должен быть старше вас? (В рамках вселенной)',
    a: [
      'Да',
      "Нет",
      "Такого же возраста",
      "Не важно"
    ]
  },
);

for (const q of questions) for (const a of q.answers) console.log(a.parameters);

export { questions }
export type { Question, Answer }