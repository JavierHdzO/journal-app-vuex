import axios from 'axios';

const journalAPI = axios.create({
    baseURL:'https://vue-demos-9c33f-default-rtdb.firebaseio.com'
})

console.log( process.env.NODE_ENV )  // While testing

export default journalAPI;

