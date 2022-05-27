import {Client, Server} from 'styletron-engine-atomic';

const getHydrateClass = () =>
  document.getElementsByClassName(
    '_css_hydrate_',
  ) as HTMLCollectionOf<HTMLStyleElement>;

export const styletron =
  typeof window === 'undefined'
    ? new Server({
        prefix: '_',
      })
    : new Client({
        hydrate: getHydrateClass(),
        prefix: '_',
      });
