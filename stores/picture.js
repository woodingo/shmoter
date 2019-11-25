import { createEvent, createStore } from 'effector';
export const takePicture = createEvent('Picture taken');

const $picture = createStore({}).on(takePicture, (state, picture) => picture);
export default $picture;
