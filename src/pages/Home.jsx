import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'

const Home = ({notes,loading, handleFilterText,filterText}) => {
  return (
    <> 
    filterText={filterText}          
     <Filter handleFilterText={handleFilterText} />
     <NoteCardContainer notes={notes}loading={loading}/>
    </>
  )
}

export default Home  