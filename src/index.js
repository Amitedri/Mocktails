import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout'
const App = ()=>{
  return (<div className='App'>
    <Layout />
  </div>)
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
