import axios from "axios"

export const MoveFromTrashToArchive = async (dispatch, _id, token, navigate) => {
    debugger;
    try {

        const { data: { archives, notes, trash } } = await axios.post(`/api/trash/restore/${_id}`, {}, { headers: { authorization: token } })
        dispatch({ type: "MOVE-From-TRASH-TO-ARCHIVE", payload: { archives, notes, trash } });
        navigate("/trash");

    } catch (error) {
        console.error(error)
        dispatch({ type: "SHOW_TOAST", payload: "Something went Wrong in moving note to Trash" });
    }
}

export const deleteNoteFromTrashById = async (dispatch, _id, token) => {
    debugger;
    try {
        const { data: { trash } } = await axios({
            url: `/api/trash/delete/${_id}`,
            method: 'delete',
            headers: { authorization: token }
        })
        debugger;
        dispatch({ type: "DELETE-FROM-TRASH", payload: trash })
    } catch (error) {
        dispatch({ type: "SHOW_TOAST", payload: "Something went Wrong in deleting note from Trash" });
    }
}

export const MoveFromTrashToNote = async (dispatch, _id, noteData, token, navigate) => {
    debugger;
    const note = { note: noteData }
    try {
        const deleted = await deleteNoteFromTrashById(dispatch, _id, noteData, token);
        if (deleted) {
            const { data: { notes } } = await axios({
                url: `/api/notes/${_id}`,
                method: 'post',
                data: JSON.stringify(note),
                headers: { authorization: token }
            })
            if (notes) {
                debugger;
                dispatch({ type: "Move-From-Trash-To-Note", payload: noteData });
                navigate("/note")
            }
        }
    } catch (error) {
        dispatch({ type: "SHOW_TOAST", payload: "Something went Wrong in moving note from Trash to Notes" });
    }
}