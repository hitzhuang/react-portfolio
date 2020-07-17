import ProjectTypes from "./types";

export const setProjectDemoIndex = (index) => ({
    type: ProjectTypes.SET_PROJECT_DEMO_INDEX,
    payload: index,
});
