
import React from 'react'
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import NoteCardContainer from './components/NoteCardContainer'


const App = () => {
  return (
    <div>
    <NavBar/>
    <Filter />
    <NoteCardContainer/>
    </div>
  )
}

export default App
