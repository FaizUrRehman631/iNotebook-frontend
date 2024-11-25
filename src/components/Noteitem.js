import React,{useState,useEffect} from "react";


const Noteitem = (props) => {
  const { note, Image, Image1} = props;
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
        <img src={currentImage} className="card-img-top" alt="Im" />
        <div className="card-body">
         <div className="d-flex align-items-center">
         <h5 className="card-title "> {note.title}</h5>
          <i className="fa-solid fa-trash mx-2"></i>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
         </div>
          <p className="card-text">
            {note.description}
          </p>
          <a href="..." className="btn btn-primary mb-3">
            {note.tag}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
