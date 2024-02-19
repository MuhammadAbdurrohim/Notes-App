import React from "react";
import NoteInput from "./noteinput";
import NoteList from "./notelist";

function NoteBody({ notesAll, notesArchive, setNotes }) {
  return (
    <div className="app-note__body">
      <NoteInput setNotes={setNotes} />
      <NoteList label="All Notes" setNotes={setNotes} notes={notesAll} />
      <NoteList
        label="Archive Notes"
        setNotes={setNotes}
        notes={notesArchive}
      />
    </div>
  );
}

export default NoteBody;
