import { createEvent, createStore } from 'effector';
export const updateResults = createEvent('Results updated');

const mock = [
  {
    key: 'A',
    uri:
      'https://surlybikes.com/uploads/bikes/_medium_image/Straggler_BK7804.jpg',
  },
  {
    key: 'B',
    uri:
      'https://www.santafixie.com/imgs/basso/bicicleta-basso-bikes-palta-shadow-grey-inf1.jpg',
  },
  {
    key: 'C',
    uri:
      'https://cdn11.bigcommerce.com/s-mfcpiiyu2d/images/stencil/2048x2048/products/197/718/Atalaya_Hunt_35_Carbon_X-Wide_Rainbow_Wall_Side_Low_Sq__24927.1564159445.1280.1280__41913.1565022873.jpg?c=2',
  },
  {
    key: 'D',
    uri:
      'https://surlybikes.com/uploads/bikes/_medium_image/Straggler_BK7804.jpg',
  },
  {
    key: 'E',
    uri:
      'https://surlybikes.com/uploads/bikes/_medium_image/Straggler_BK7804.jpg',
  },
  {
    key: 'F',
    uri:
      'https://surlybikes.com/uploads/bikes/_medium_image/Straggler_BK7804.jpg',
  },
];

const $results = createStore(mock).on(updateResults, (state, results) =>
  results.map(item => ({ ...item, key: item.img })),
);
export default $results;
