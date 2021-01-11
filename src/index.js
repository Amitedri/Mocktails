import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout'
import Navbar from './components/Navbar'
const App = ()=>{
  return (<div className='App'>
    <Navbar/>
    <Layout/>
  </div>)
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
