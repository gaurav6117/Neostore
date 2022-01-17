import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState = { isLoggedIn: false, uid: {}, Products: [], cartCount: 0, totalCost: 0, address: [], order: [], searchData: [] };
function reducer(state = initialState, actions) {
  switch (actions.type) {
    case 'AddProduct': return { ...state, Products: actions.payload };
    case 'SETUID': return { ...state, uid: actions.payload };
    case 'ISLOGGEDIN': return { ...state, isLoggedIn: true };
    case 'ISLOGGEDOUT': return { ...state, isLoggedIn: false };
    case 'CARTCOUNT': return { ...state, cartCount: actions.payload };
    case 'incTOTALCOST': return { ...state, totalCost: state.totalCost + Number(actions.payload) };
    case "ADDRESS": return { ...state, address: actions.payload };
    case "ORDER": return { ...state, order: actions.payload };
    case "SEARCHDATA": return { ...state, searchData: actions.payload };
    default: return state;
  }
}
const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
