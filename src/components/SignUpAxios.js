import axios from "axios"


export default axios.create({
    baseURL: 'https://petwork-backend.herokuapp.com/'
})