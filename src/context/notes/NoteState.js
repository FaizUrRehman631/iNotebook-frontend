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
              "_id": "6740bd1457bfc7cb26449fd3",
              "user": "674075320537ab06f0f4bbae",
              "title": "The One and Only Trible Chief",
              "description": "Roman Reigns.",
              "tag": "Wrestling News"
            },
            {
              "_id": "6740bd2b57bfc7cb26449fd5",
              "user": "674075320537ab06f0f4bbae",
              "title": "Welcome to Pakistan",
              "description": "Discover the Land of Hospitality",
              "tag": "Invitation"
            },
            {
                "_id": "6740bbcb3cbd35acf88c7e13",
                "user": "674075320537ab06f0f4bbae",
                "title": "Wake Up Early",
                "description": "Please wake up early in the morning.",
                "tag": "Recommended"
              },
              {
                "_id": "6740bd1457bfc7cb26449fd3",
                "user": "674075320537ab06f0f4bbae",
                "title": "The One and Only Trible Chief",
                "description": "Roman Reigns.",
                "tag": "WWE"
              },
              {
                "_id": "6740bd2b57bfc7cb26449fd5",
                "user": "674075320537ab06f0f4bbae",
                "title": "Welcome to Pakistan",
                "description": "Discover the Land of Hospitality",
                "tag": "PakLand"
              }
            ]

const [notes, setNotes]=useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;