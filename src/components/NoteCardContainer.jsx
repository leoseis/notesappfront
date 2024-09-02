import React from 'react'
import NoteCard from './NoteCard'

const NoteCardContainer = ({notes}) => {
  console.log(notes)
  return (
    <div className='container'>
       <div className="note-has-grid row">

        

        
        { notes.map(note => <NoteCard key={note.id} />)}


       


    </div>
    </div>
  )
}

export default NoteCardContainer
