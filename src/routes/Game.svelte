<script context="module" lang="ts">
  import type { Answer } from '../lib';

  import { useGames } from 'svelte-yagames';
  import { image, enterClickOnce } from 'svelte-yagames/actions';
  import { Button } from '../lib/components';
  import { findBestBoyfriend, questions, getImage } from '../lib';
</script>

<script lang="ts">
  const games = useGames();

  let index = 0;

  let params: Answer['parameters'] = {
    love: 0,
    personality: 0,
  };

  /**
   * Для возможности вернуться на предыдущий шаг вычесть значения
   */
  let current_step: Answer['parameters'] = {
    love: 0,
    personality: 0,
  };

  const process = (parameters: Answer['parameters']) => {
    return () => {
      if (index === 99 || index === 33) {
        games.sdk.adv.showFullscreenAdv({
          callbacks: {
            onClose() {},
            onError() {}
          }
        });
      }

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
      <span class="progress noselect">{index} / {questions.length}</span>
      <span class="question noselect">{question.question}</span>

      {#if index === 33}
        <span class="adv noselect">Продолжить можно после просмотра рекламы</span>
      {/if}

      {#if index === 99}
        <span class="adv noselect">Узнаете парня после рекламы</span>
      {/if}
    </div>

  <div class="base">
    <ul>
      {#each question.answers as answer}
        <li>
          <Button action={enterClickOnce} on:click={process(answer.parameters)} style="width: 100%; padding: calc(var(--unit) * 2);" choice h-full>
            {answer.text}
          </Button>
        </li>
      {/each}
    </ul>
  </div>

    <div class="bottom">
      <Button action={enterClickOnce} disabled={index === 0} on:click={back} choice>
        Назад
      </Button>
    </div>
  {:else}
    <div class="head">
      <span class="boyfriend noselect">Ваш парень:</span>
      <span class="boyfriend noselect">{boyfriend}</span>
    </div>

    <div class="base base--boyfriend">
      <img use:image src={getImage(boyfriend)} alt={boyfriend} />
    </div>

    <div class="bottom">
      <Button action={enterClickOnce} on:click={reset}>
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
    align-items: stretch;
    justify-content: center;
    align-content: stretch;
    justify-items: center;

    grid-template-rows: auto 1fr auto;

    gap: calc(var(--unit) * 2);
    padding: calc(var(--unit));
  }

  .question, .progress, .boyfriend, .adv {
    padding: 0 0.2rem;
    
    font-size: var(--font-heading);
    line-height: 1;

    text-align: center;
  }

  .head {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    min-height: 20vh;
    
    text-shadow: -2px -1px 0 #9f86c0;
  }

  .bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
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
    height: 100%;

    display: grid;
    align-items: center;
    align-content: center;

    gap: var(--unit);
  }

  ul > li {
    list-style-type: none;
  }

  @media (min-width: 1024px) {
    .question, .progress, .boyfriend, .adv {
      max-width: 60vw;
    }

    ul {
      width: 60vw;
    }
  }

  @media (min-aspect-ratio: 3.5) {
    .root {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }

    .base {
      justify-content: center;
    }

    .question, .progress, .boyfriend, .adv {
      font-size: var(--font-base);
    }

    .bottom {
      align-items: flex-end;
      justify-content: center;
    }
  }

  @media only screen and (orientation: landscape) and (pointer: coarse) {
    ul {
      display: grid;
      align-items: stretch;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    .head {
      min-height: unset;
    }
  }
</style>