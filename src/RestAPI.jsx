import axios from "axios"

const RestAPI = axios.create({
  baseURL: "http://localhost:3001"
})

export default RestAPI
