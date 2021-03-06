import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Firebase, { FirebaseContext } from './components/Firebase'
import * as serviceWorker from './serviceWorker';
import AuthProvider from './components/Contexts/AuthContext';


ReactDOM.render(
  <React.StrictMode>
   <FirebaseContext.Provider value={new Firebase()}>
     <AuthProvider>
      <App />
    </AuthProvider>
  </FirebaseContext.Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
