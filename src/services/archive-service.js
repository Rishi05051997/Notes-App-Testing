import axios from "axios";

export const getArchiveNoteByUser = async (token) => {
    try {
        const { data: { archives } } = await axios({
            url: `/api/archives`,
            method: 'get',
            headers: { authorization: token }
        })
        if (archives) {

        }
    } catch (error) {
        return error
    }
}

export const ArchiveNoteById = async (dispatch, _id, note, token, navigate) => {
    try {
        // const deleted = await deleteNoteById(dispatch, note._id)
        // if (deleted) {
        const { data: { archives, notes } } = await axios({
            url: `/api/notes/archives/${note._id}`,
            method: 'post',
            data: note,
            headers: { authorization: token }
        })
        dispatch({ type: "MOVE-TO-ARCHIVE", payload: { archives, notes } });
        navigate("/archive")
        // }
    } catch (error) {

    }
}

export const deleteArchiveNoteById = async (dispatch, _id, note, token) => {
    try {
        const { data: { archives, trash } } = await axios({
            url: `/api/archives/delete/${_id}`,
            method: 'delete',
            data: note,
            headers: { authorization: token }
        })
        dispatch({ type: "DELETE-FROM-ARCHIVE", payload: { archives, trash } });
    } catch (error) {
        dispatch({ type: "SHOW_TOAST", payload: "Something went Wrong in deleting note from Archive" });
    }
}

export const updateArchive = async (dispatch, _id, note, token, action) => {
    switch (action) {
        case "MOVE-TO-NOTE":
            const deleted = await deleteArchiveNoteById(dispatch, _id, note, token)
            if (deleted) {
                const { data: { notes } } = await axios({
                    url: `/api/notes/${_id}`,
                    method: 'post',
                    data: note,
                    headers: { authorization: token }
                })
                if (notes) {
                    dispatch({ type: "MOVE-FROM-ARCHIVE-TO-NOTE", payload: note })
                }
            }
            break;

        default:
            break;
    }
}