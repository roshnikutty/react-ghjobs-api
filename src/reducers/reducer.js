import {
    FORM_SUBMIT_ACTION_SUCCESS,
    DISPLAY_ON_LOAD_SUCCESS
} from '../actions/actions';

const initialState = {
    landingPageValues: [],
    formOutput: []
}

export const gitJobsReducer = (state = initialState, action) => {
    if (action.type === DISPLAY_ON_LOAD_SUCCESS) {
        let jobsJson = action.payload;
        const landingPageValues = jobsJson.map((job) => {
            return {
                title: job.title,
                type: job.type,
                description: job.description
            }
        })
        return Object.assign({}, state, { landingPageValues });
    }
    if (action.type === FORM_SUBMIT_ACTION_SUCCESS) {
        let formJobsJson = action.payload;
        const formOutput = formJobsJson.map((job) => {
            return {
                title: job.title,
                type: job.title,
                description: job.description
            }
        })
        return Object.assign({}, state, { formOutput });
    }
    return state;
}