import ProjectTypes from "./types";

const INIT_STATE = {
    index: 1,
};

const projectReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ProjectTypes.SET_PROJECT_DEMO_INDEX:
            return {
                ...state,
                index: action.payload,
            };
        default:
            return state;
    }
};

export default projectReducer;
