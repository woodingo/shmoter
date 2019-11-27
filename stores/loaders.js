import { createEvent, createStore } from 'effector';
export const changeLoaderState = createEvent('Loader state changed');

const $loaders = createStore({}).on(changeLoaderState, (state, event) => ({
  ...state,
  ...event,
}));
export default $loaders;
