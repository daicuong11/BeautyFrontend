import { SET_CURRENT_USER, SET_THEME } from "./constants";

const initState = {
    theme: handleInitTheme(),
    currentUser: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).user : {},
}

function reducer(state, action) {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: handleChangeTheme(action.payload),
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            throw new Error('Invalid action.');
    }
}

function handleInitTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
    return localStorage.theme;
}

function handleChangeTheme(theme) {
    localStorage.theme = theme === 'light' ? 'dark' : 'light';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    return localStorage.theme;
}

export { initState }

export default reducer;