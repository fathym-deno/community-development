import { DefaultEaCConfig, defineEaCConfig, EaCRuntime } from '@fathym/eac-runtime';

export const config = defineEaCConfig({
  Server: {
    port: 6212,
  },
  Plugins: [
    ...(DefaultEaCConfig.Plugins || []),
  ],
});

export function configure(_rt: EaCRuntime): Promise<void> {
  return Promise.resolve();
}
