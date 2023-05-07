interface Question {
  question: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  parameters: {
    love: number;
    personality: number;
    physical: number;
  };
}

const questions: Question[] = [
  {
    question: "Какой жанр аниме вам нравится больше всего?",
    answers: [
      { text: "Экшн/Шонен", parameters: { love: 0, personality: 3, physical: 2, } },
      { text: "Романтика/Шодзе", parameters: { love: 10, personality: 5, physical: 1, } },
      { text: "Комедия", parameters: { love: 2, personality: 8, physical: 1, } },
      { text: "Детектив/Триллер", parameters: { love: 3, personality: 2, physical: 3, } },
    ],
  },
  {
    question: "Какой тип характера парня вам ближе?",
    answers: [
      { text: "Красивый и сильный", parameters: { love: 5, personality: 2, physical: 10, } },
      { text: "Умный и хитрый", parameters: { love: 1, personality: 9, physical: 4, } },
      { text: "Смелый и отважный", parameters: { love: 7, personality: 6, physical: 8, } },
      { text: "Добрый и заботливый", parameters: { love: 10, personality: 8, physical: 2, } },
    ],
  },
  {
    question: "Какой тип внешности вам нравится больше всего?",
    answers: [
      { text: "Белокурый и синеглазый", parameters: { love: 5, personality: 2, physical: 10, } },
      { text: "Темноволосый и кареглазый", parameters: { love: 1, personality: 9, physical: 4, } },
      { text: "Рыжеволосый и зеленоглазый", parameters: { love: 7, personality: 6, physical: 8, } },
      { text: "Черноволосый и сероглазый", parameters: { love: 10, personality: 8, physical: 2, } },
    ],
  },
  {
    question: "Какой цвет вам больше всего нравится?",
    answers: [
      { text: "Красный", parameters: { love: 5, personality: 3, physical: 1, } },
      { text: "Синий", parameters: { love: 2, personality: 1, physical: 2, } },
      { text: "Зеленый", parameters: { love: 3, personality: 8, physical: 1, } },
      { text: "Фиолетовый", parameters: { love: 8, personality: 5, physical: 3, } },
    ],
  },
  {
    question: "Какое ваше любимое блюдо?",
    answers: [
      { text: "Суши", parameters: { love: 7, personality: 2, physical: 3, } },
      { text: "Пицца", parameters: { love: 2, personality: 4, physical: 2, } },
      { text: "Стейк", parameters: { love: 1, personality: 6, physical: 8, } },
      { text: "Салат", parameters: { love: 10, personality: 8, physical: 1, } },
    ],
  },
  {
    question: "Какое ваше любимое время года?",
    answers: [
      { text: "Весна", parameters: { love: 7, personality: 8, physical: 3, } },
      { text: "Лето", parameters: { love: 3, personality: 4, physical: 6, } },
      { text: "Осень", parameters: { love: 5, personality: 7, physical: 2, } },
      { text: "Зима", parameters: { love: 1, personality: 2, physical: 10, } },
    ],
  },
  {
    question: "Какое ваше любимое время суток?",
    answers: [
      { text: "Утро", parameters: { love: 2, personality: 8, physical: 3, } },
      { text: "День", parameters: { love: 5, personality: 4, physical: 6, } },
      { text: "Вечер", parameters: { love: 7, personality: 7, physical: 2, } },
      { text: "Ночь", parameters: { love: 1, personality: 2, physical: 10, } },
    ],
  },
  {
    question: "Какую музыку вы предпочитаете?",
    answers: [
      { text: "Поп", parameters: { love: 2, personality: 2, physical: 7, } },
      { text: "Рок", parameters: { love: 6, personality: 6, physical: 3, } },
      { text: "Классика", parameters: { love: 3, personality: 9, physical: 2, } },
      { text: "Рэп", parameters: { love: 1, personality: 4, physical: 7, } },
    ],
  },
  {
    question: "Какой вид деятельности вы предпочитаете?",
    answers: [
      { text: "Чтение", parameters: { love: 5, personality: 7, physical: 2, } },
      { text: "Спорт", parameters: { love: 1, personality: 5, physical: 8, } },
      { text: "Игры", parameters: { love: 7, personality: 2, physical: 3, } },
      { text: "Кино", parameters: { love: 2, personality: 8, physical: 1, } },
    ],
  },
  {
    question: "Какое ваше любимое место?",
    answers: [
      { text: "Пляж", parameters: { love: 7, personality: 4, physical: 6, } },
      { text: "Горы", parameters: { love: 3, personality: 9, physical: 8, } },
      { text: "Город", parameters: { love: 2, personality: 7, physical: 2, } },
      { text: "Дом", parameters: { love: 10, personality: 8, physical: 1, } },
    ],
  },
  {
    question: "Какой предмет вы бы выбрали на острове?",
    answers: [
      { text: "Нож", parameters: { love: 2, personality: 6, physical: 8, } },
      { text: "Книга", parameters: { love: 5, personality: 8, physical: 1, } },
      { text: "Матчи", parameters: { love: 1, personality: 4, physical: 5, } },
      { text: "Вода", parameters: { love: 10, personality: 2, physical: 1, } },
    ],
  },
  {
    question: "Какой ваш любимый праздник?",
    answers: [
      { text: "Новый год", parameters: { love: 7, personality: 5, physical: 1, } },
      { text: "День рождения", parameters: { love: 3, personality: 9, physical: 2, } },
      { text: "8 Марта", parameters: { love: 10, personality: 3, physical: 3, } },
      { text: "День знаний", parameters: { love: 2, personality: 8, physical: 1, } },
    ],
  },
  {
    question: "Какой цвет вы предпочитаете?",
    answers: [
      { text: "Красный", parameters: { love: 7, personality: 4, physical: 5, } },
      { text: "Синий", parameters: { love: 3, personality: 8, physical: 2, } },
      { text: "Зеленый", parameters: { love: 1, personality: 6, physical: 7, } },
      { text: "Фиолетовый", parameters: { love: 5, personality: 9, physical: 1, } },
    ],
  },
  {
    question: "Какое ваше любимое время года?",
    answers: [
      { text: "Весна", parameters: { love: 7, personality: 5, physical: 3, } },
      { text: "Лето", parameters: { love: 3, personality: 8, physical: 7, } },
      { text: "Осень", parameters: { love: 1, personality: 6, physical: 2, } },
      { text: "Зима", parameters: { love: 5, personality: 9, physical: 1, } },
    ],
  },
  {
    question: "Какое животное вам нравится?",
    answers: [
      { text: "Собака", parameters: { love: 7, personality: 6, physical: 5, } },
      { text: "Кошка", parameters: { love: 3, personality: 8, physical: 3, } },
      { text: "Лев", parameters: { love: 1, personality: 9, physical: 8, } },
      { text: "Пингвин", parameters: { love: 5, personality: 2, physical: 1, } },
    ],
  },
  {
    question: "Какой бы вы выбрали автомобиль?",
    answers: [
      { text: "Спортивный", parameters: { love: 3, personality: 8, physical: 9, } },
      { text: "Классический", parameters: { love: 5, personality: 7, physical: 2, } },
      { text: "Внедорожник", parameters: { love: 1, personality: 5, physical: 7, } },
      { text: "Электромобиль", parameters: { love: 7, personality: 9, physical: 1, } },
    ],
  },
]

export { questions }
export type { Question, Answer }