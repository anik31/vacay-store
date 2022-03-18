import axios from "axios";
import {useEffect} from "react";

export function useLogin(){
    useEffect(()=>{
        (async function loginHandler(){
            try{
                const {data} = await axios.post("/api/auth/login",{
                    email: "johndoe@gmail.com",
                    password: "johnDoe123"
                })
                localStorage.setItem("encodedToken",data.encodedToken);
                console.log("login success");
            }catch(err){
                console.log(err)
            }
        })();
    },[]);
};