

export const signIn = () => {
    localStorage.setItem('accessToken', 'testing-token');
    window.location.replace('/login');
}

export const signOut = () => {
    localStorage.removeItem('accessToken');
    window.location.replace('/login');
}

export const checkAuth = () => {
    const isUserAuthenticated = localStorage.getItem('accessToken');
    return isUserAuthenticated;
}