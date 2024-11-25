import Noteitem from './Noteitem';
import Image from './Images/img2.webp'
import Image1 from './Images/img1.jpg'
import AddNote from './AddNote';
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, addNote}= context;

  return (
    <>
    <AddNote/>
    <div className="row my-3">
    <h2>Your Notes</h2>
    {notes.map((note)=>{
      return <Noteitem key={note._id} note={note} Image={Image} Image1={Image1} />;
    })}
     </div>
    </>
  )
}

export default Notes;
