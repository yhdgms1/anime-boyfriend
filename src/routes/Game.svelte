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
    for (const [key, value] of Object.entries(current_step)) {
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

    <ul class="base">
      {#each question.answers as answer}
        <li>
          <Button on:click={process(answer.parameters)} style="width: 100%;" choice>
            {answer.text}
          </Button>
        </li>
      {/each}
    </ul>

    <div class="bottom">
      <Button disabled={index === 0} on:click={back}>
        Назад
      </Button>
    </div>
  {:else}
    <div class="head head--boyfriend">
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

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .question, .progress, .boyfriend {
    padding: 0 0.2rem;
    
    font-size: 2.75rem;
    line-height: 2.5rem;

    text-align: center;
  }

  @media (min-width: 1024px) {
    .question, .progress, .boyfriend {
      font-size: 3rem;
      line-height: 1;

      max-width: 60vw;
    }
  }

  .question, .progress {
    user-select: none;
  }

  .head {
    height: 40vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    text-shadow: -2px -1px 0 #9f86c0;
  }

  .head--boyfriend {
    height: 20vh;
  }

  .bottom {
    height: 20vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .base {
    display: flex;
    flex-direction: column;

    height: 40vh;
  }

  .base--boyfriend {
    height: 60vh;
  }

  .base--boyfriend > img {
    max-height: 60vh;
    max-width: 80vw;
  }

  ul {
    padding-inline-start: 0.4rem;
    padding-inline-end: 0.4rem;
    margin-block-start: 0;
    margin-block-end: 0;

    width: 60vw;
  }

  ul > li {
    list-style-type: none;
  }
</style>