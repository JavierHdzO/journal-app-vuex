import axios from 'axios';

const authAPI = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
        
    params:{
        key: 'AIzaSyC_1Ltrir_BWgwxFHfke-1tpBhSbmpd5cs'
    }
    
})

export default authAPI;

