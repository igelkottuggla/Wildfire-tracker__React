import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context';

ReactDOM.render(
    <AppProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </AppProvider>,
    document.getElementById('root')
);

reportWebVitals();
