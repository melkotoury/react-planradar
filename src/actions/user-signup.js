import axios from 'axios';

export const userSignupRequest = ( user) => {
    console.log(user.username);
    return axios.post('/api/users',user);
};

