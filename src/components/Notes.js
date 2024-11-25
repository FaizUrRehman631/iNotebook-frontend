import React, {useContext} from 'react'
import NoteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';
import Image from './Images/img2.webp'
import Image1 from './Images/img1.jpg'


const Notes = () => {
    const context = useContext(NoteContext);
  const {notes, setNotes}= context;
  return (
    <div className="row my-3">
    <h2>Your Notes</h2>
    {notes.map((note)=>{
      return <Noteitem note={note} Image={Image} Image1={Image1} />;
    })}
    </div>
  )
}

export default Notes;
