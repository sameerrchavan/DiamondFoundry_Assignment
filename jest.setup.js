require('raf/polyfill');

const jest = require('jest');
const createStore = require('redux');
const createMemoryHistory = require('history/createMemoryHistory').default;

global.reduxTest = () => {
  global.store = createStore(createMemoryHistory(), {}, {});
  global.dispatch = global.store.dispatch;
};
