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

const questions: Question[] = [
  {
    question: "Какой жанр аниме вам нравится больше всего?",
    answers: [
      { text: "Экшн/Шонен", parameters: { love: 0, personality: 3, } },
      { text: "Романтика/Шодзе", parameters: { love: 10, personality: 5, } },
      { text: "Комедия", parameters: { love: 2, personality: 8, } },
      { text: "Детектив/Триллер", parameters: { love: 3, personality: 2, } },
    ],
  },
  {
    question: "Какой тип характера парня вам ближе?",
    answers: [
      { text: "Красивый и сильный", parameters: { love: 5, personality: 2, } },
      { text: "Умный и хитрый", parameters: { love: 1, personality: 9, } },
      { text: "Смелый и отважный", parameters: { love: 7, personality: 6, } },
      { text: "Добрый и заботливый", parameters: { love: 10, personality: 8, } },
    ],
  },
  {
    question: "Какой тип внешности вам нравится больше всего?",
    answers: [
      { text: "Белокурый и синеглазый", parameters: { love: 5, personality: 2, } },
      { text: "Темноволосый и кареглазый", parameters: { love: 1, personality: 9, } },
      { text: "Рыжеволосый и зеленоглазый", parameters: { love: 7, personality: 6, } },
      { text: "Черноволосый и сероглазый", parameters: { love: 10, personality: 8, } },
    ],
  },
  {
    question: "Какой цвет вам больше всего нравится?",
    answers: [
      { text: "Красный", parameters: { love: 5, personality: 3, } },
      { text: "Синий", parameters: { love: 2, personality: 1, } },
      { text: "Зеленый", parameters: { love: 3, personality: 8, } },
      { text: "Фиолетовый", parameters: { love: 8, personality: 5, } },
    ],
  },
  {
    question: "Какое ваше любимое блюдо?",
    answers: [
      { text: "Суши", parameters: { love: 7, personality: 2, } },
      { text: "Пицца", parameters: { love: 2, personality: 4, } },
      { text: "Стейк", parameters: { love: 1, personality: 6, } },
      { text: "Салат", parameters: { love: 10, personality: 8, } },
    ],
  },
  {
    question: "Какое ваше любимое время года?",
    answers: [
      { text: "Весна", parameters: { love: 7, personality: 8, } },
      { text: "Лето", parameters: { love: 3, personality: 4, } },
      { text: "Осень", parameters: { love: 5, personality: 7, } },
      { text: "Зима", parameters: { love: 1, personality: 2, } },
    ],
  },
  {
    question: "Какое ваше любимое время суток?",
    answers: [
      { text: "Утро", parameters: { love: 2, personality: 8, } },
      { text: "День", parameters: { love: 5, personality: 4, } },
      { text: "Вечер", parameters: { love: 7, personality: 7, } },
      { text: "Ночь", parameters: { love: 1, personality: 2, } },
    ],
  },
  {
    question: "Какую музыку вы предпочитаете?",
    answers: [
      { text: "Поп", parameters: { love: 2, personality: 2, } },
      { text: "Рок", parameters: { love: 6, personality: 6, } },
      { text: "Классика", parameters: { love: 3, personality: 9, } },
      { text: "Рэп", parameters: { love: 1, personality: 4, } },
    ],
  },
  {
    question: "Какой вид деятельности вы предпочитаете?",
    answers: [
      { text: "Чтение", parameters: { love: 5, personality: 7, } },
      { text: "Спорт", parameters: { love: 1, personality: 5, } },
      { text: "Игры", parameters: { love: 7, personality: 2, } },
      { text: "Кино", parameters: { love: 2, personality: 8, } },
    ],
  },
  {
    question: "Какое ваше любимое место?",
    answers: [
      { text: "Пляж", parameters: { love: 7, personality: 4, } },
      { text: "Горы", parameters: { love: 3, personality: 9, } },
      { text: "Город", parameters: { love: 2, personality: 7, } },
      { text: "Дом", parameters: { love: 10, personality: 8, } },
    ],
  },
  {
    question: "Какой предмет вы бы выбрали на острове?",
    answers: [
      { text: "Нож", parameters: { love: 2, personality: 6, } },
      { text: "Книга", parameters: { love: 5, personality: 8, } },
      { text: "Еда", parameters: { love: 1, personality: 4, } },
      { text: "Вода", parameters: { love: 10, personality: 2, } },
    ],
  },
  {
    question: "Какой ваш любимый праздник?",
    answers: [
      { text: "Новый год", parameters: { love: 7, personality: 5, } },
      { text: "День рождения", parameters: { love: 3, personality: 9, } },
      { text: "8 Марта", parameters: { love: 10, personality: 3, } },
      { text: "День знаний", parameters: { love: 2, personality: 8, } },
    ],
  },
  {
    question: "Какое животное вам нравится?",
    answers: [
      { text: "Собака", parameters: { love: 7, personality: 6, } },
      { text: "Кошка", parameters: { love: 3, personality: 8, } },
      { text: "Лев", parameters: { love: 1, personality: 9, } },
      { text: "Пингвин", parameters: { love: 5, personality: 2, } },
    ],
  },
  {
    question: "Какой бы вы выбрали автомобиль?",
    answers: [
      { text: "Спортивный", parameters: { love: 3, personality: 8, } },
      { text: "Классический", parameters: { love: 5, personality: 7, } },
      { text: "Внедорожник", parameters: { love: 1, personality: 5, } },
      { text: "Электромобиль", parameters: { love: 7, personality: 9, } },
    ],
  },
]

export { questions }
export type { Question, Answer }