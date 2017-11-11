import fetchJsonp from 'fetch-jsonp';
const API_URL = `https://jobs.github.com/positions.json`;

export const DISPLAY_ON_LOAD_SUCCESS = "DISPLAY_ON_LOAD_SUCCESS";
export const displayOnLoadSuccess = (jobs) => ({
    type: DISPLAY_ON_LOAD_SUCCESS,
    payload: jobs
});

export const getLandingPageJobs = () => {
    //Thunk function
    return function (dispatch) {
        return fetchJsonp(`${API_URL}`)
        .then(data => {
            if(!data.ok) {
                return Promise.reject(data.statusText);
            }
            return data.json()
        })
        .then((jobsJson) => {
            dispatch(displayOnLoadSuccess(jobsJson))
        }).catch(err =>
            console.log(`Error while running getLandingPageJobs(): ${err}`)
        )
    }
}

export const FORM_SUBMIT_ACTION = "FORM_SUBMIT_ACTION";
export const formSubmitAction = (form_input) => ({
    type: FORM_SUBMIT_ACTION,
    payload: form_input
})
export const FORM_SUBMIT_ACTION_SUCCESS = "FORM_SUBMIT_ACTION_SUCCESS";
export const formSubmitActionSucess = (jobs) => ({
    type: FORM_SUBMIT_ACTION_SUCCESS,
    payload: jobs
})
