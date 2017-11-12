import fetchJsonp from 'fetch-jsonp';
const API_URL = `https://jobs.github.com/positions.json`;
global.fetchJsonp = fetchJsonp;

export const DISPLAY_ON_LOAD_SUCCESS = "DISPLAY_ON_LOAD_SUCCESS";
export const displayOnLoadSuccess = (jobs) => ({
    type: DISPLAY_ON_LOAD_SUCCESS,
    payload: jobs
});

export const getLandingPageJobs = () => {
    //Thunk function
    return function (dispatch) {
        return global.fetchJsonp(`${API_URL}`)
            .then(data => {
                if (!data.ok) {
                    return Promise.reject(data.statusText);
                }
                return data.json()
            }).then((jobsJson) => {
                dispatch(displayOnLoadSuccess(jobsJson))
            }).catch(err =>
                console.log(`Error while running getLandingPageJobs(): ${err}`)
            )
    }
}

export const FORM_SUBMIT_ACTION_SUCCESS = "FORM_SUBMIT_ACTION_SUCCESS";
export const formSubmitActionSuccess = (jobs) => ({
    type: FORM_SUBMIT_ACTION_SUCCESS,
    payload: jobs
})

export const formSubmitAction = (formInputValues) => {
    return function (dispatch) {
        return fetchJsonp(`${API_URL}?description=${formInputValues.skill}&location=${formInputValues.location}`)
            .then(data => {
                if (!data.ok) {
                    return Promise.reject(data.statusText);
                }
                return data.json()
            }).then((formJobsJson) => {
                dispatch(formSubmitActionSuccess(formJobsJson))
            }).catch(err =>
                console.log(`This error showed up: ${err}`)
            )
    }
}