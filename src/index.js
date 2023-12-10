import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './Global.css';
import { ContextSheduleProvider } from './context/SheduleContext';
import { ContextTimeWorkProvider } from './context/TimeWorkContext';
import { ContextServiceProvider } from './context/ServiceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextSheduleProvider>
      <ContextTimeWorkProvider>
        <ContextServiceProvider>
        <GlobalStyle/>
          <Provider store={store}>
            <App />
          </Provider>
        </ContextServiceProvider>
      </ContextTimeWorkProvider>
    </ContextSheduleProvider>
  </React.StrictMode>
);


