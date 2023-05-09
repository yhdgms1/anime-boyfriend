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
  <h1>Твой аниме парень</h1>

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

    background: url('../assets/neko.png') no-repeat bottom left;
    background-size: auto 80%;
  }

  h1 {
    padding: 0 0.2rem;
    
    font-size: var(--font-heading);
    line-height: 1;

    text-align: center;

    text-shadow: -3px -2px 2px #9f86c0;
  }
</style>