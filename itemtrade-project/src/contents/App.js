import React from 'react';
import Nav from './Nav';
import Main from './Main'
import '../css/App.css'


function App() {
  return (
    <div>
      <Nav notlogined={false} />
      <section className = "mainsection">
      <Main/>
      </section>    
    </div>
  )
}

export default App;
