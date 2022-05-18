export const AddNote = () => {
    return (
        <>
            <div class="modal">
                <div class="modal-container lg-modal-width mar-y-2">
                    <div class="modal-header pad-xs">
                        <div class="head-2 highlightMainText">Add New Note</div>
                        <span
                            class="iconify modal-close text-3 highlightMainText cursor_"
                            data-icon="ant-design:close-circle-outlined"
                        ></span>
                    </div>
                    <form >
                        <div class="modal-body text-2 pad-xs">
                            <div className="custom-input-one mar-y-2">
                                <input
                                    id="note-title"
                                    type="text"
                                    className="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                />
                                <label for="note-title" className="input-label text-2"
                                >Note Title</label
                                >
                            </div>
                            <textarea
                                id="note-text"
                                className="custom-input-one mar-y-2"
                                placeholder="Note Details"
                                rows={10}
                                cols={10}

                            >

                            </textarea>



                            <div className="custom-input-one mar-y-2">
                                <input
                                    id="note-title"
                                    type="text"
                                    className="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                />
                                <label for="note-title" className="input-label text-2"
                                >Add Lebels</label
                                >
                            </div>

                        </div>


                        <div className="modal-footer pad-sm">
                            <button className="btn btn-primary">
                                Add Note
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="overlay"></div>
        </>
    )
}