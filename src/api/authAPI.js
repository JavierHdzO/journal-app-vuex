import axios from 'axios';

import key from './key';

const authAPI = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
        
    params:{
        key
    }
    
})

export default authAPI;

