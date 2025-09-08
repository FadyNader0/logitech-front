import { useEffect, useRef, useState } from "react";
import "./CheckOTP.css";
import { getUser } from "../../utilitas/apiService";
import { updateUser } from "../../utilitas/apiService";
import { deleteUser } from "../../utilitas/apiService";
import { toast } from 'react-toastify';
import Loader from '../LoaderLogin/LoaderLogin';


export default function CheckOTP({userEmail , onClose}) {
  const inputs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [Otp , setOtp] = useState("");
  const [loading , setLoading] = useState (false);
  const [user , setUser] = useState([]);
  
  const getUserData = async () =>{
        const res = await getUser();
        const users = res.data.results;
        const userData = users.filter(u => u.Email === userEmail);
        setUser(userData)

  } 
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value && index < inputs.length - 1) {
      inputs[index + 1].current.focus();
     }
     setOtp(inputs.map((input) => input.current.value).join(""));
  };
  function activeUser(){

    setTimeout(async()=>{
        try {
            setLoading(true);
            if (user.length > 0) {
                const realOtp = user[0].OTP
                if (realOtp === Otp){
                    const newDataUser={
                        field_5409336: true,
                        field_5427312: ""  
                    }
                    try{
                         await updateUser(user[0].id , newDataUser);
                    }catch (err){
                        console.log(err)

                    }
                    toast.success("Your emal activated successfull")
                    onClose()
                     
                }else{
                    toast.error("The otp wrong")
                }
                
                
                return;
            }else{
                toast.error("No user founded")
            }
        } catch (err) {
            console.error("Login error:", err);
        }finally{
            setLoading(false);
        }
    },100)
  }



  const cancelOtp = async () => {
    await deleteUser(user[0].id)
    onClose()
    toast.warning("You must signup again.")

  }
  useEffect(() =>{
    getUserData()
  }, [])

  return (
    <>
        <div className="checkOtp">
        <form className="formOTP" onSubmit={(e) => { e.preventDefault(); activeUser(); }}>
            <div className="title">OTP</div>
            <div className="title">Verification Code</div>
            <p className="message">
            We have sent a verification code to your mobile number
            </p>
            <div className="inputsOTP">
            {inputs.map((ref, index) => (
                <input
                key={index}
                ref={ref}
                type="text"
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                />
            ))}
            </div>
            <div className="buttons flex justify-between w-full">
                <button type="submit" className="action">
                     verify me
                </button>
                <button type="button" className="action cancelOtp" onClick={() => {cancelOtp()}}>
                     Cancel
                </button>
            </div>
        </form>
        </div>
        {loading && <div className="loader"> <Loader/> </div>}
    </>
  );
}
