import { createEvent, createStore } from 'effector';
export const updateResults = createEvent('Results updated');

const $results = createStore([]).on(updateResults, (state, results) => results);
export default $results;
