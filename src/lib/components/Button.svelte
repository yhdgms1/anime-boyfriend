<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { getEventsAction } from '../../lib/events-action';

  const events = getEventsAction();

  type $$Props = HTMLButtonAttributes & {
    sm?: boolean;
  };

  export let sm = false;
</script>

<button type="button" class="{$$restProps['disabled'] ? '' : 'glow'} {sm && 'small'}" {...$$restProps} use:events>
  <slot />
</button>

<style>
  button {
    padding: 0.8rem 1.6rem;
    margin: 0.2rem 0;
    
    font-size: 1.4rem;
    line-height: 2rem;

    text-align: center;

    position: relative;
    z-index: 1;

    background: #38a3a5;
    border: 3px solid white;

    user-select: none;
    cursor: pointer;

    color: white;
    text-shadow: -2px -1px 0 #9f86c0;
  }

  button:disabled {
    filter: brightness(70%);
  }

  button:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    button {
      font-size: 2rem;
      line-height: 1;
    }
  }

  @media (max-width: 1023px) {
    .small {
      padding: 0.4rem 0.8rem;
      margin: 0.2rem 0;
      
      line-height: 1rem;
    }
  }

  .glow::before {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 25px;
  }

  .glow::before {
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(to right, #ff85a1, #a2d2ff);
    filter: blur(20px);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .glow:hover::before {
    opacity: 0.45;
  }

  .glow:active::before {
    opacity: 0.65;
  }
</style>