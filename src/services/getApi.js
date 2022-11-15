import axios from "axios"
import { URL } from "./endpoint"

export const getOriginalTemplate= async ()=>{
  console.log(URL);
  return  await axios.get(`${URL}`)
}

export const getImageUrl = async () =>{
  return await axios.get(`${URL}/getImages`)
}