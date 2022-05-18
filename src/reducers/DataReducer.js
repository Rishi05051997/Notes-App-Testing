export const DataReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE-MODDAL":
            return { ...state, isModelOpen: !state.isModelOpen }

        default:
            return state
    }
}