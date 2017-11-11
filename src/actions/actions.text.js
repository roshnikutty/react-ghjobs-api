import { getLandingPageJobs, formSubmitAction } from './actions';
const API_URL = `https://jobs.github.com/positions.json`;

describe('getLandingPageJobs', () => {
    it('should dispatch displayOnLoadSuccess', () => {
        const jobs = [];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return jobs;
                }
            })
        })
        const dispatch = jest.fn();
        return getLandingPageJobs()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_URL}`);
            expect(dispatch).toHaveBeenCalledWith(displayOnLoadSuccess(jobs));
        });

    });
}); 