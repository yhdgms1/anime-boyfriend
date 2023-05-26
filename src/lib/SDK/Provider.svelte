<script context="module" lang="ts">
  import { setContext } from 'svelte';
  import { key, OfflineSDK, LocalStorage } from './sdk';
</script>

<script lang="ts">
  let data = {};

  setContext(key, data);

  const set = (value: unknown) => {
    Object.assign(data, value);
  };

  const loaded = new Promise(async (resolve) => {
    if (!window.YaGames) {
      set(OfflineSDK), resolve(void 0);
      return;
    }

    const sdk = await window.YaGames.init();
    const player = await sdk.getPlayer({ scopes: false })

    const authorized = player.getMode() !== 'lite';

    const ExternalStorage = {
      get: () => player.getData(),
      set: (data: unknown) => player.setData(data),
    };

    const storage = authorized
      ? ExternalStorage
      : LocalStorage;

    set({ sdk, player, authorized, storage }), resolve(void 0);
  })
</script>

{#await loaded then}
  <slot />
{/await}