import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/stylereset.css'
import './Styles/mainstyles.css'
import './Styles/nav.css'
import './Styles/about.css'
import './Styles/song-form.css'
import './Styles/song-table.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
