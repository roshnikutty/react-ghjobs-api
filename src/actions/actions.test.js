import {getLandingPageJobs } from './actions'
   
import  {formSubmitActionSuccess,
    displayOnLoadSuccess,
    DISPLAY_ON_LOAD_SUCCESS,
    FORM_SUBMIT_ACTION_SUCCESS}
 from './actions';
// import fetchJsonp from 'fetch-jsonp';
const API_URL = `https://jobs.github.com/positions.json`;

describe('getLandingPageJobs', () => {
    it('should dispatch displayOnLoadSuccess', () => {
        const jobs = [{
            title: 'Javascript pro',
            type: 'full-time',
            description: 'knowledge of testing'
        }];
        global.fetchJsonp = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return jobs;
                }
            })
        })
        console.log(getLandingPageJobs);
        const dispatch = jest.fn();
        return getLandingPageJobs()(dispatch).then(() => {
            expect(global.fetchJsonp).toHaveBeenCalledWith(`https://jobs.github.com/positions.json`);
            expect(dispatch).toHaveBeenCalledWith(displayOnLoadSuccess(jobs));
        });

    });
});

describe('displayOnLoadSuccess', () => {
    it('should return an array with json of jobs', () => {
        const jobs = [{
            title: 'Javascript pro',
            type: 'full-time',
            description: 'knowledge of testing'
        }];
        const action = displayOnLoadSuccess(jobs);
        expect(action.type).toEqual(DISPLAY_ON_LOAD_SUCCESS);
        expect(action.payload).toEqual(jobs);
    });
});

describe('formSubmitActionSuccess', () => {
    it('should return an array with json of jobs for input form values', () => {
        const jobs = [{
            skill: 'Javascript',
            location: 'Boston'
        }];
        const action = formSubmitActionSuccess(jobs);
        expect(action.type).toEqual(FORM_SUBMIT_ACTION_SUCCESS);
        expect(action.payload[0].location).toEqual(jobs[0].location);
    });
});