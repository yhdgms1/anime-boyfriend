import { getContext } from 'svelte';
import { LocalStorage } from './localStorage';

const key = import.meta.env.DEV ? Symbol('sdk-context') : Symbol();

interface SDK {
  sdk: {
    adv: {
      showFullscreenAdv: (params: { callbacks: { onClose: () => void; onError: () => void; } }) => void;
    },
    features: {
      LoadingAPI: {
        ready?: () => void;
      }
    },
  }

  getPlayer: (params: { scopes: boolean }) => SDK['player'];

  player: {
    getMode: () => ('lite' & {}) | string;
    getData: () => Promise<unknown>;
    setData: (data: unknown) => Promise<void>;
  }

  authorized: boolean

  storage: typeof LocalStorage
}

declare global {
  interface Window {
    YaGames?: {
      init: () => SDK;
    }
  }
}

const OfflineSDK: SDK = {
  sdk: {
    adv: {
      showFullscreenAdv: ({ callbacks }: { callbacks: { onClose: () => void; onError: () => void; } }) => {
        callbacks.onClose();
      }
    },
    features: {
      LoadingAPI: {
        ready: () => { }
      }
    }
  },
  getPlayer: () => {
    return OfflineSDK.player
  },
  storage: LocalStorage,
  authorized: false,
  player: {
    getMode: () => {
      return 'lite'
    },
    getData: () => {
      return LocalStorage.get()
    },
    setData: async (data) => {
      await LocalStorage.set(data);
    }
  }
}

const getSDK = () => {
  return getContext(key) as SDK;
}

export { key, OfflineSDK, LocalStorage, getSDK }
export type { SDK }