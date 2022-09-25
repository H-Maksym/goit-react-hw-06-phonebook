import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from 'redux/reducers';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state.contacts);
    localStorage.setItem('contacts', serialisedState);
    if (state.contacts.length === 0) {
      localStorage.removeItem('contacts');
    }
  } catch (e) {
    console.warn(e);
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));

//!ADDITIONAL LEARNING
//TODO ALL Functional for Local storage
// convert object to string and store in localStorage
// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state.contacts);
//     localStorage.setItem('persistantState', serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// load string from localStarage and convert into an Object
// invalid output must be undefined
// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem('contacts');
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
// const store = createStore(rootReducers, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
// store.subscribe(() => saveToLocalStorage(store.getState()));

// export default store;
