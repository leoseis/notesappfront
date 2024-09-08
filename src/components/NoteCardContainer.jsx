import React from 'react'
import NoteCard from './NoteCard'
import Loader from './Loader'

const NoteCardContainer = ({notes,  loading}) => {
  console.log(notes)
  return (
    <div className='container'>
       <div className="note-has-grid row">

        {loading && <Loader loading={loading} />}
        {/* if loading is true its load with componet Loader displays if not it wont display  */}



        

        
        { notes.map(note => <NoteCard key={note.id}note={note} />)}


       


    </div>
    </div>
  )
}

export default NoteCardContainer
