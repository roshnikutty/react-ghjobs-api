import { DISPLAY_ON_LOAD, FORM_SUBMIT_ACTION } from '../actions/actions';
import fetchJsonp from 'fetch-jsonp';

const API_URL = `https://jobs.github.com/positions.json`;
const initialState = {
    outputText: "Placeholder text where result would show",
    landingPageValues: [],
    formOutput: [{title:"a", type:"b", description:"C"}]
}

export const gitJobsReducer = (state = initialState, action) => {
    if (action.type === DISPLAY_ON_LOAD) {
        // var myHeaders = new Headers();
        // myHeaders.append("Access-Control-Allow-Origin", "*") // do this way without jsonp

        fetchJsonp(`${API_URL}`)
            .then(data => {
                return data.json()
            })
            .then((json) => {
                console.log(json)
                for (let i = 0; i < json.length; i++) {
                    state.landingPageValues = [].concat(...state.landingPageValues, {
                        title: json[i].title,
                        type: json[i].type,
                        description: json[i].description
                    })
                }
                console.log(state.landingPageValues)
            }).catch(err =>
                console.log(`This error showed up: ${err}`)
            )
        return state;
    }

    if (action.type === FORM_SUBMIT_ACTION) {
        fetchJsonp(`${API_URL}?description=${action.payload.skill}&location=${action.payload.location}`)
            .then(data => {
                return data.json()
            })
            .then((json) => {
                console.log(json)
                for (let i = 0; i < json.length; i++) {
                    state.formOutput = [].concat(...state.formOutput, {
                        title: json[i].title,
                        type: json[i].type,
                        description: json[i].description
                    })
                }
                console.log(state.formOutput)
            }).catch(err =>
                console.log(`This error showed up: ${err}`)
            )
        return state;
    }
    return state;
}