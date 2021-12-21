import axios from "axios";


export const signIn = (userName, password, callback) => {

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            console.log(response && response.data);

            localStorage.setItem('accessToken', 'testing-token');
            localStorage.setItem('userName', userName);

            if (callback) callback(true);

            window.location.replace('/login');
        })
        .catch(error => {
            if (callback) callback(false);
            console.error('Request Failed', error);
        });

    // if(!userName || !password) return;

    // const requestBody = {
    //     userName,
    //     password
    // }

    // axios.post('https://jsonplaceholder.typicode.com/todos/1', requestBody)
    //     .then(response => {
    //         console.log(response && response.data);

    //         localStorage.setItem('accessToken', 'testing-token');
    //         window.location.replace('/login');
    //     })
    //     .catch(error => {
    //         console.error('Request Failed', error);
    //     });
}

export const signOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');

    window.location.replace('/login');
}

export const checkAuth = () => {
    const isUserAuthenticated = localStorage.getItem('accessToken');
    return isUserAuthenticated;
}