import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='App-header' style={styles}>
        <div className='container'>
        <img src='images/Xpovi.png' className="App-logo" alt="logo" />
        </div>
    </header>
  )
}
const styles = {
    backgroundColor : "#FFF"
}
export default Header