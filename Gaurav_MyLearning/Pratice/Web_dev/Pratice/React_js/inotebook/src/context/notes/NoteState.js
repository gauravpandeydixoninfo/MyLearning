// import react from "react";
import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props)=>{
    const notesInitial= [
        {
          "_id": "656476b7416d3f194afd1b57",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-11-27T11:00:07.406Z",
          "__v": 0
        },
        {
          "_id": "6565846f065d311009eb81fb",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "fgldy",
          "tag": "personal",
          "date": "2023-11-28T06:10:55.115Z",
          "__v": 0
        },
        {
          "_id": "6565846f065d311009eb81fb",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "fgldy",
          "tag": "personal",
          "date": "2023-11-28T06:10:55.115Z",
          "__v": 0
        },
        {
          "_id": "6565846f065d311009eb81fb",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "fgldy",
          "tag": "personal",
          "date": "2023-11-28T06:10:55.115Z",
          "__v": 0
        },
        {
          "_id": "6565846f065d311009eb81fb",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "fgldy",
          "tag": "personal",
          "date": "2023-11-28T06:10:55.115Z",
          "__v": 0
        },
        {
          "_id": "6565846f065d311009eb81fb",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "fgldy",
          "tag": "personal",
          "date": "2023-11-28T06:10:55.115Z",
          "__v": 0
        },
        {
          "_id": "6565846f065d311009eb81fb",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "fgldy",
          "tag": "personal",
          "date": "2023-11-28T06:10:55.115Z",
          "__v": 0
        },
        {
          "_id": "6565846f065d311009eb81fb",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "fgldy",
          "tag": "personal",
          "date": "2023-11-28T06:10:55.115Z",
          "__v": 0
        },
        {
          "_id": "6565846f065d311009eb81fb",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "fgldy",
          "tag": "personal",
          "date": "2023-11-28T06:10:55.115Z",
          "__v": 0
        },
        {
          "_id": "6565846f065d311009eb81fb",
          "user": "65643c2afa3a71805a2e16df",
          "title": "My title",
          "description": "fgldy",
          "tag": "personal",
          "date": "2023-11-28T06:10:55.115Z",
          "__v": 0
        }
      ]
      const [notes, setNotes]= useState(notesInitial);
    
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;