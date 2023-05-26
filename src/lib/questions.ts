import questionsText from '../../questions.txt?raw';

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

const parse = (str: string) => {
  const items = str.split('\n');

  const reduced = items.reduce((acc, curr) => {
    if (curr === '') {
      return acc;
    } else if (curr.startsWith('-')) {
      acc[acc.length - 1].a.push(curr.slice(2))
    } else {
      acc.push({ q: curr.split('. ', 2)[1], a: [] })
    }

    return acc;
  }, [] as ({ q: string; a: string[] })[]);

  return reduced;
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

const questions: Question[] = mutateInto(...parse(questionsText));

export { questions }
export type { Question, Answer }