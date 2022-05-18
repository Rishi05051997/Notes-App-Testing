import { useData } from "../../context/DataProvider"
import { updateNote } from "../../services";

const colorPalletData = [
    {
        id: 1,
        cssName: "red",
        bgProp: "bgRed"
    },
    {
        id: 2,
        cssName: "green",
        bgProp: "bgGreen"
    },
    {
        id: 1,
        cssName: "yellow",
        bgProp: "bgYellow"
    },
    {
        id: 1,
        cssName: "purple",
        bgProp: "bgPurple"
    },
    {
        id: 1,
        cssName: "naviBlue",
        bgProp: "bgBlue"
    },
    {
        id: 1,
        cssName: "pink",
        bgProp: "bgPink"
    },
]

export const ColorPallet = ({ setShowColorPallet, noteId, note, setNoteData }) => {
    const { dispatch } = useData();
    const token = localStorage.getItem("token");
    return (

        <div className="color-pallet">
            {/* <div className="color-round cursor_ red" onClick={() => {
                noteId ? updateNote(dispatch, token, noteId, { ...note, bgColor: "bgRed" }) :
                    dispatch({ type: "BG-CHANGE", payload: "bgRed" })
                setShowColorPallet(val => !val)
            }}></div> */}
            {
                colorPalletData.map(({ id, cssName, bgProp }) =>
                    <div key={id} className={`color-round cursor_ ${cssName}`} onClick={() => {
                        noteId ? updateNote(dispatch, token, noteId, { ...note, bgColor: bgProp }) :
                            setNoteData((note) => ({
                                ...note,
                                bgColor: bgProp
                            })
                            )
                        setShowColorPallet(val => !val)
                    }}></div>)
            }
            {/* <div className="color-round cursor_ green" onClick={() => {
                dispatch({ type: "BG-CHANGE", payload: "bgGreen" })
                setShowColorPallet(val => !val)
            }}></div>
            <div className="color-round cursor_ yellow" onClick={() => {
                dispatch({ type: "BG-CHANGE", payload: "bgYellow" })
                setShowColorPallet(val => !val)
            }}></div>
            <div className="color-round cursor_ purple" onClick={() => {
                dispatch({ type: "BG-CHANGE", payload: "bgPurple" })
                setShowColorPallet(val => !val)
            }}></div>
            <div className="color-round cursor_ naviBlue" onClick={() => {
                dispatch({ type: "BG-CHANGE", payload: "bgBlue" })
                setShowColorPallet(val => !val)
            }}></div>
            <div className="color-round cursor_ pink" onClick={() => {
                dispatch({ type: "BG-CHANGE", payload: "bgPink" })
                setShowColorPallet(val => !val)
            }}></div> */}
        </div>)
}