<script context="module" lang="ts">
  import type { Answer } from '../lib/questions';

  import { Button } from '../lib/components';
  import { findBestBoyfriend } from '../lib/find';
  import { questions } from '../lib/questions';
  import { getImage } from '../lib/get-image';
</script>

<script lang="ts">
  let index = 0;

  let params: Answer['parameters'] = {
    love: 0,
    personality: 0,
    physical: 0,
  };

  /**
   * Для возможности вернуться на предыдущий шаг вычесть значения
   */
  let current_step: Answer['parameters'] = {
    love: 0,
    personality: 0,
    physical: 0,
  };

  const process = (parameters: Answer['parameters']) => {
    return () => {
      for (const [key, value] of Object.entries(parameters)) {
        params[key] += value;
        current_step[key] = value;
      }

      index += 1;
    }
  }

  const back = () => {
    if (index === 0) return;

    for (const [key, value] of Object.entries(current_step)) {
      params[key] -= value;
      current_step[key] = 0;
    }

    index -= 1;
  }

  const reset = () => {
    for (const key of Object.keys(current_step)) {
      params[key] = 0;
      current_step[key] = 0;
    }

    index = 0;
  }

  $: boyfriend = index === questions.length && findBestBoyfriend(params);
</script>

<div class="root">
  {#if index < questions.length}
    {@const question = questions[index]}

    <div class="head">
      <span class="progress">{index} / {questions.length}</span>
      <span class="question">{question.question}</span>
    </div>

  <div class="base">
    <ul>
      {#each question.answers as answer}
        <li>
          <Button on:click={process(answer.parameters)} style="width: 100%;" choice>
            {answer.text}
          </Button>
        </li>
      {/each}
    </ul>
  </div>

    <div class="bottom">
      <Button disabled={index === 0} on:click={back} choice>
        Назад
      </Button>
    </div>
  {:else}
    <div class="head">
      <span class="boyfriend">Ваш парень:</span>
      <span class="boyfriend">{boyfriend}</span>
    </div>

    <div class="base base--boyfriend">
      <img draggable="false" on:dragstart={(e) => (e.preventDefault(), false)} src={getImage(boyfriend)} alt={boyfriend} />
    </div>

    <div class="bottom">
      <Button on:click={reset}>
        Начать сначала
      </Button>
    </div>
  {/if}
</div>

<style>
  .root {
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .question, .progress, .boyfriend {
    padding: 0 0.2rem;
    
    font-size: var(--font-heading);
    line-height: 1;

    text-align: center;
  }
  .question, .progress {
    user-select: none;
  }

  .head {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    text-shadow: -2px -1px 0 #9f86c0;
  }

  .bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .base {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .base--boyfriend > img {
    max-height: 55vh;
    max-width: 80vw;
  }

  ul {
    padding-inline-start: 0.4rem;
    padding-inline-end: 0.4rem;
    margin-block-start: 0;
    margin-block-end: 0;

    width: 90vw;
  }

  ul > li {
    list-style-type: none;
  }

  @media (min-width: 1024px) {
    .question, .progress, .boyfriend {
      max-width: 60vw;
    }

    ul {
      width: 60vw;
    }
  }

  @media (min-aspect-ratio: 5.9) {
    .root {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }

    .base {
      justify-content: center;
    }

    .question, .progress, .boyfriend {
      font-size: var(--font-base);
    }
  }
</style>