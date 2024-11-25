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
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">
            {note.description}
          </p>
          <a href="#" className="btn btn-primary">
            {note.tag}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
