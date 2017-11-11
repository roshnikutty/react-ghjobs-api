export const DISPLAY_ON_LOAD = "DISPLAY_ON_LOAD";
export const displayOnLoad = () => ({
    type: DISPLAY_ON_LOAD
});

export const FORM_SUBMIT_ACTION = "FORM_SUBMIT_ACTION";
export const formSubmitAction = (form_input) => ({
    type: FORM_SUBMIT_ACTION,
    payload: form_input
})