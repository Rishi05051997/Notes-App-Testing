import axios from "axios"

export const addNote = async (noteData, token, dispatch) => {
    const note = { note: noteData }
    debugger;
    try {
        const { data: { notes } } = await axios({
            method: 'post',
            url: `/api/notes`,
            data: JSON.stringify(note),
            headers: { authorization: token }
        })
        if (notes) {
            dispatch({ type: "ADD-NOTE", payload: notes })
            dispatch({ type: "CLEAR-NOTE-FORM" })

        }
    } catch (error) {
        dispatch({ type: "SHOW_TOAST", payload: "Something went Wrong in adding note" });
    }
}

export const deleteNoteById = async (dispatch, _id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
        const { data: { notes, trash } } = await axios.delete(`/api/notes/${_id}`, { headers: { authorization: token } });
        dispatch({ type: "DELETE-NOTE", payload: { notes, trash } })
    } catch (error) {
        console.error(error)
        dispatch({ type: "SHOW_TOAST", payload: "Something went Wrong in deleting note" });
    }
}


export const updateNote = async (dispatch, token, _id, note) => {
    debugger
    try {
        const { data: { notes } } = await axios({
            url: `/api/notes/${_id}`,
            method: 'post',
            data: { note },
            headers: { authorization: token }
        })
        if (notes) {
            dispatch({ type: "UPDATE-NOTE", payload: note })
        }
    } catch (error) {
        dispatch({ type: "SHOW_TOAST", payload: "Something went Wrong in updating note" });
    }
}