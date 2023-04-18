import ExpressBrute from 'express-brute';

var store = new ExpressBrute.MemoryStore();

var bruteforce = new ExpressBrute(store, {
  freeRetries: 5,
  minWait: 1 * 60 * 1000,
  maxWait: 5 * 60 * 1000,
  // failCallback: failCallback,
  // handleStoreError: handleStoreError
});

export default bruteforce.prevent;
