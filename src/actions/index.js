import * as c from './ActionTypes';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance }from 'redux-firestore';
import firebase from "./firebase";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)

export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});


export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});