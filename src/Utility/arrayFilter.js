export const generalFilter = (notesData, isPinned, isUnPinned, priority) => {
    // if (priority === "") return notesData;
    if (isPinned) {
        return notesData.filter((note) => note.isPinned === true ? isPinned : false)
    } else if (isUnPinned) {
        return notesData.filter((note) => note.isPinned === false ? isUnPinned : false)
    }
    if (priority) {
        debugger;
        return notesData.filter((note) => note.selectedPriority === priority ? true : false)
    }
    else {
        return notesData;
    }

    // notesData = notesData.filter((note) => note.isPinned ? isPinned : true)
    //     .filter((note) => note.isPinned === false ? isUnPinned : false)
    //     .filter((note) => note.selectedPriority === priority ? true : false)


}