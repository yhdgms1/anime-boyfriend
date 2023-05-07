import { animeBoyfriends as boyfriends } from './boyfriends';
import type { Answer } from './questions'

export const findBestBoyfriend = (answers: Answer['parameters']): string => {
  let bestMatchName = "";
  let bestMatchScore = -Infinity;

  for (const boyfriend of boyfriends) {
    let score = 0;

    for (const trait in answers) {
      score += Math.sin(Math.abs(answers[trait] - boyfriend[trait])) % 3000;
    }

    if (score > bestMatchScore) {
      // console.log(`${score} > ${bestMatchScore}: ${boyfriend.name}`);

      bestMatchScore = score;
      bestMatchName = boyfriend.name;
    } else {
      // console.log(`${score} < ${bestMatchScore}: ${boyfriend.name}`)
    }
  }

  return bestMatchName;
}
