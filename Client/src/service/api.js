import axios from "axios";
// const url = "http://localhost:8000";
// const url = "https://wishboookbackend.onrender.com";
const url = "https://flipcartbackend-o3a5.onrender.com";



// fucntion to authintiate user signUp data
export const authunticateSignUp = async(userData)=>{
    try{
        const res =  await axios.post(`${url}/signup`, userData);
        alert(`${res.data.message}`);
    }
    catch(error){
        console.log("error while calling sign up api", error);
       alert(error.response.data.message);
    }
}

// function to check user log in data
export const authunticateSignIn = async(userData)=>{
    try{
        const res =  await axios.post(`${url}/signin`, userData);
        alert(`${res.data.message}`);
        return res.data;
    }
    catch(error){
        console.log("error while calling signin api", error);
       alert(error.response.data.message);
    }
}


