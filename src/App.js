import React from 'react'
import './App.css';
import SearchBar from './SearchBar';
import TopBar from './TopBar';
import Info from './AppInfo'

function App() {
  return (
    <div>
      <TopBar/>
      <Info/>
      <SearchBar/>
    </div>
  )
}

export default App;
