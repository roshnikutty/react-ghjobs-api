import { FORM_SUBMIT_ACTION, DISPLAY_ON_LOAD_SUCCESS } from '../actions/actions';
// import fetchJsonp from 'fetch-jsonp';

// const API_URL = `https://jobs.github.com/positions.json`;
const initialState = {
    outputText: "Placeholder text where result would show",
    landingPageValues: [],
    formOutput: []
}

export const gitJobsReducer = (state = initialState, action) => {
    if (action.type === DISPLAY_ON_LOAD_SUCCESS) {
        let jobsJson = action.payload;
        for (let i = 0; i < jobsJson.length; i++) {
            state.landingPageValues = [].concat(...state.landingPageValues, {
                title: jobsJson[i].title,
                type: jobsJson[i].type,
                description: jobsJson[i].descriptionS6
            })
        }
        console.log(state.landingPageValues)
        return state;
    }


    // if (action.type === FORM_SUBMIT_ACTION) {
    //     fetchJsonp(`${API_URL}?description=${action.payload.skill}&location=${action.payload.location}`)
    //         .then(data => {
    //             return data.json()
    //         })
    //         .then((json) => {
    //             console.log(json)
    //             for (let i = 0; i < json.length; i++) {
    //                 state.formOutput = [].concat(...state.formOutput, {
    //                     title: json[i].title,
    //                     type: json[i].type,
    //                     description: json[i].description
    //                 })
    //             }
    //             console.log(state.formOutput)
    //         }).catch(err =>
    //             console.log(`This error showed up: ${err}`)
    //         )
    //     return state;
    // }
    return state;
}