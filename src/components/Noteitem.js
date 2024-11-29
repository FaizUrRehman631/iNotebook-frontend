import React,{useState,useEffect,useContext} from "react";
import NoteContext from "../context/notes/noteContext";




const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote}= context;

  const { updateNote ,note, Image, Image1} = props;    // Notes.js props destructring 
  const [currentImage, setCurrentImage] = useState(Image);
  useEffect(() => {
     setTimeout(() => {
      setCurrentImage(()=>{
        return Image1
      }); // Change to Image1 after 2 seconds
    }, 5000); // 2000 ms = 2 seconds

  })


  return (
    <div className="col-md-6">
      <div className="card my-3">
        <img src={currentImage} className="card-img-top" alt="pics" />
        <div className="card-body">
         <div className="d-flex align-items-center">
         <h5 className="card-title "> {note.title}</h5>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id) 
           props.showAlert("Note deleted successfully", "success");
           }}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
         </div>
          <p className="card-text">
            {note.description}
          </p>
          <a href="..." className="btn btn-primary mb-3">
            {note.tag}
          </a>
        </div>
        <small className="text-muted text-center">Note Created On: {new Date(note.date).toUTCString()}</small>
      </div>
    </div>
  );
};

export default Noteitem;
