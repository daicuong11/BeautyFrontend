import { SET_CURRENT_USER, SET_THEME } from './constants';

export const setTheme = payload => ({
    type: SET_THEME,
    payload
});

export const setCurrentUser = payload => ({
    type: SET_CURRENT_USER,
    payload
});