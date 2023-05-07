import type { Action } from 'svelte/action';
import { bubble, listen, get_current_component } from 'svelte/internal';

/**
 * @author AlexxNB
 * @source https://github.com/AlexxNB/svelte-chota/blob/master/cmp/utils.js
 */
export const getEventsAction = () => {
  const component = get_current_component();

  const action: Action = node => {
    const events = Object.keys(component.$$.callbacks);
    const listeners: (() => void)[] = [];

    for (const event of events) {
      listeners.push(listen(node, event, e => bubble(component, e)))
    }

    return {
      destroy: () => {
        for (const lisneter of listeners) {
          lisneter();
        }
      }
    }
  };

  return action;
}