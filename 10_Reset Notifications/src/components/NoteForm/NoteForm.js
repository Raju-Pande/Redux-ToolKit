import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addNote } from "../../redux/actions/noteActions";

import { actions } from "../../redux/reducers/noteReducer";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notificationReducer";

import styles from "./NoteForm.module.css";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const noteMessage = useSelector(notificationSelector);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(noteText));
    setNoteText("");
  };
  if (noteMessage) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 2000);
  }

  return (
    <div className={styles.noteContainer}>
      {noteMessage && (
        <div class="alert alert-success" role="alert">
          {noteMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
