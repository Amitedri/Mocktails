import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout'
import Navbar from './components/Navbar'
const App = ()=>{
  const [list, setList] = React.useState('');
  const getList = (list)=>{
    return setList(()=>list)
  }
  return (<div className='App'>
    <Navbar setList={getList} />
    <Layout list={list}/>
  </div>)
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
