import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'

const Home = ({notes,loading}) => {
  return (
    <>           
     <Filter />
     <NoteCardContainer notes={notes}loading={loading}/>
    </>
  )
}

export default Home  