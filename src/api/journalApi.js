import axios from 'axios';

const journalAPI = axios.create({
    baseURL:'https://vue-demos-9c33f-default-rtdb.firebaseio.com'
})

export default journalAPI;

