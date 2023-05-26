<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { getEventsAction } from '../../lib/events-action';

  const events = getEventsAction();

  type $$Props = HTMLButtonAttributes & {
    choice?: boolean;
    "h-full"?: boolean;
  };

  export let choice = false;
</script>

<button 
  type="button"
  class:glow={!$$restProps.disabled}
  class:choice={choice}
  class:h-full={$$restProps['h-full']}
  class:noselect={true}
  {...$$restProps} 
  use:events
>
  <slot />
</button>

<style>
  button {
    padding: 0.8rem 1.6rem;
    margin-bottom: 0.3rem;
    
    font-size: var(--font-base);
    line-height: 1;

    text-align: center;

    position: relative;
    z-index: 1;

    background: #38a3a5;
    border: 3px solid white;

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

  .choice {
    padding: 0.4rem 0.8rem;
    margin-bottom: 0.2rem;
  }

  .h-full {
    height: 100%;
    margin-bottom: 0;
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