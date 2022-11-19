import React, {useState} from 'react';
import "./Notes.css"

/**
 * noteText is the value for adding note input
 * note limit is 300 characters (we can change this for more or less)
 */
function AddNote({handleAddNote}){
    const [noteText, setNoteText] = useState('');
    const charLimit = 500;
    const handleChange =(event)=>{
        if(charLimit - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }
    }

    // saving the new note
    const handleSaveClick =() => {
        //if there is no character input, dont save the note
        if(noteText.trim().length >0){
            handleAddNote(noteText);
            setNoteText('')
        }
    }

    return(
        <div className='noteNew'>
            {/**text area for input */}
            <textarea cols='10' rows='8' placeholder='Type to add a new note..'
            onChange={handleChange} value={noteText}></textarea>
            <div className='note-footer'>
                <small>{charLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}


export default AddNote