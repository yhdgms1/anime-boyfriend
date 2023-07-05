<script context="module" lang="ts">
  import { Button } from '../lib/components';
</script>

<script lang="ts">
  import { route } from '../lib/routing';

  const play = () => {
    $route = 'game';
  }
</script>

<div class="root">
  <h1 class="noselect">Твой Аниме Парень</h1>

  <Button on:click={play}>
    Играть
  </Button>
</div>

<style>
  .root {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    padding: 0 0.2rem;
    
    font-size: var(--font-heading);
    line-height: 1;

    text-align: center;

    text-shadow: -3px -2px 2px #9f86c0;
  }
</style>