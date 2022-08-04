import react, { useState } from "react";
import axios from "../Api/axiosLensaConfig";
import { Link, useNavigate } from "react-router-dom";


export const getItemsLesna = {
getMe:()=> {
  return axios.get("/dashboard/me");
}, 

}


export const postItemsLesna ={
postLogin:(email,password) => {
  return axios.post("/dashboard/auth/login",{email,password})
}

}
