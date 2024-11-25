import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState=(props)=>{
    const notesInitial =[
            {
              "_id": "6740bbcb3cbd35acf88c7e13",
              "user": "674075320537ab06f0f4bbae",
              "title": "Wake Up Early",
              "description": "Please wake up early in the morning.",
              "tag": "Personal"
            },
            {
              "_id": "6740bd1457bfc7cb226449fd3",
              "user": "674075320537ab06f0f4bbae",
              "title": "The One and Only Trible Chief",
              "description": "Roman Reigns.",
              "tag": "Wrestling News"
            },
            {
              "_id": "6740bd2b57bfc7cb262449fd5",
              "user": "674075320537ab06f0f4bbae",
              "title": "Welcome to Pakistan",
              "description": "Discover the Land of Hospitality",
              "tag": "Invitation"
            },
            {
                "_id": "6740bbcb3cbd35acf288c7e13",
                "user": "674075320537ab06f0f4bbae",
                "title": "Wake Up Early in the morning",
                "description": "Please wake up early in the morning.",
                "tag": "Recommended"
              },
              {
                "_id": "6740bd1457bfc7cb326449fd3",
                "user": "674075320537ab06f0f4bbae",
                "title": "The Only Trible Chief",
                "description": "Roman Reigns.",
                "tag": "WWE"
              },
              {
                "_id": "6740bd2b57bfc337cb26449fd5",
                "user": "674075320537ab06f0f4bbae",
                "title": "Welcome to my Teritory",
                "description": "Discover the Land of Hospitality",
                "tag": "PakLand"
              }
            ]

const [notes, setNotes]=useState(notesInitial);

// Add a Note
const addNote=(title, description, tag)=>{
    // Todo api call 
    console.log("adding a new note")
const note={
    "_id": "6740bd22b57bfc7cb2kj6449fd5",
    "user": "6740753205327ab06kjf0f4bbae",
    "title": title,
    "description": description,
    "tag": tag
  }
setNotes(notes.concat(note));
}
// Delete a Note
const deleteNote=(id)=>{

}
// Edit a Note
const editNote=()=>{

}
    return(
        <NoteContext.Provider value={{notes, setNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;