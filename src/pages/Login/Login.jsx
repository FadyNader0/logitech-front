import { AiFillEye } from "react-icons/ai"; 
import { AiFillEyeInvisible } from "react-icons/ai"; 
import React, { useState } from 'react';
import './Login.css';
import Logo from '../../components/Logo/Logo';
import { getUser } from "../../utilitas/apiService";
import { addUser } from "../../utilitas/apiService";
import { toast } from 'react-toastify';
import { useDispatch} from 'react-redux'
import { setLogin } from '../../features/Login/LoginFeature';
import { setUser } from '../../features/UserDataFeature';
import { UploadImage } from '../../utilitas/uploadImage';
import Loader from '../../components/LoaderLogin/LoaderLogin';
import {sendOTPEmail} from '../../utilitas/sendOtpEmail'
import CheckOTP from '../../components/CheckOTP/CheckOTP';
import NavInAnotherPage from '../../components/NavInAnotherPage/NavInAnotherPage';
import {hashPassword , comparePassword} from '../../utilitas/hashPassword'


export default function Login() {
    const [state, setState] = useState("login");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [EmailNew, setEmailNew] = useState("");
    const [PasswordNew, setPasswordNew] = useState("");
    const [UserName, setUserName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Image, setImage] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showCheckOtp, setshowCheckOtp] = useState(false);
    const [passwordMessage , setPasswordMessage] = useState("❌ Password is weak");
    const [showPassword, setShowPassword] = useState(false);
    const [signupState, setSignupState] = useState(false)
    const dispatch = useDispatch();
    async function HandelLogin() {
        if (!Email || !Password) {
            toast.error("Please fill in all fields.");
            return;
        }
        try {
            setLoading(true);
            const res = await getUser();
            const users = res.data.results;
            const user = users.filter(u => u.Email === Email);
            const isPasswordMatch = await comparePassword(Password, user[0]?.Password || "");
            if (user.length === 0 || user[0].Active===false) {
                toast.error("No user found or inactive with this email.");
                
                return;
            }else if (isPasswordMatch === false) {
                toast.error("Incorrect password.");
                return;
            }else{
                toast.success("Login successful!");
                dispatch(setLogin(true));
                const userData = {
                        id: user[0].id,
                        name: user[0].UserName,
                        email: user[0].Email,
                        phone: user[0].PhoneNumber,
                        profileImage: user[0].Image,
                        unReadMassages: user[0].unReadMassages,
                };
                dispatch(setUser(userData));
                if (rememberMe){
                    localStorage.setItem("user", JSON.stringify(userData));
                }
            }
        } catch (err) {
            console.error("Login error:", err);
        }finally{
            setLoading(false);
            clearForm();
        }
    }
    async function HandelSignup() {
        if (!UserName || !EmailNew || !PasswordNew || !PhoneNumber || !Image) {
            toast.error("Please fill in all fields.");
            return;
        }
        try {
            setLoading(true);
            const res = await getUser(Email);
            const users = res.data.results;
            const user = users.filter(u => u.Email === EmailNew); 
            const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString(); 
            if (user.length === 0) {
                const imageUrl = await UploadImage(Image);
                const hashedPassword = await hashPassword(PasswordNew);
                const newUser = {
                    Email: EmailNew,
                    UserName: UserName,
                    Password: hashedPassword,
                    PhoneNumber: PhoneNumber,   
                    Active: false,
                    Image:  imageUrl,
                    OTP : generatedOtp,
                    unReadMassages: 0,
                };    
                await addUser(newUser);
                await sendOTPEmail(EmailNew, generatedOtp);
                toast.success("Account created successfully!");
                setshowCheckOtp(true)
                
                setState("login");

            }else{
                toast.error("This email already founded.");
            }
        } catch (err) {
            console.error("Login error:", err);
        }finally{
            setLoading(false);
        }
    }

    const checkPassword = (value) => {
        const upper = (value.match(/[A-Z]/g) || []).length;
        const lower = (value.match(/[a-z]/g) || []).length;
        const special = (value.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g) || []).length;

        if (value.length >= 12 && upper >= 2 && lower >= 2 && special >= 1) {
            setPasswordMessage("✅ Password is strong");
            setSignupState(true);
        } else if (value.length >= 8 && upper >= 1 && lower >= 1) {
            setPasswordMessage("🟡 Password is fair");
            setSignupState(true);
        } else {
            setPasswordMessage("❌ Password is weak");
            setSignupState(false);
        }
    }
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPasswordNew(value);
        checkPassword(value);
    }
    const clearForm = () => {
        setUserName("");
        setEmailNew("");
        setPasswordNew("");
        setPhoneNumber("");
        setImage("");
        setPasswordMessage("❌ Password is weak");
        setSignupState(false);
        setEmail("");
        setPassword("");
        setImage("");
    }
    return (
        <>
            <NavInAnotherPage />
            
            <div className="login-page">
                <div className="content-page" data-aos="zoom-in-up">
                    <div className={`welcome ${state === "login" ? "login" : "sign-up"}`}>
                        <div className="logo">
                            <Logo />
                            <h1 className='text-3xl mt-5'>Logitech</h1>
                        </div>
                        <div className="content mt-[auto]">
                            <h2 className="mb-5 text-4xl">Welcome Back!</h2>
                            <p className='text-l'>To stay with us please login with your personal info</p>

                        </div>
                    </div>
                    <div className="form" >
                        <div className="login" data-aos="fade-left" data-aos-delay="800">
                            <h3 className='mb-3 text-3xl'>Welcome</h3>
                            <p className="">Please login in to your account to continue</p>
                            <div className="input-group">
                                <input type="email" required value={Email}  onChange={(e) => setEmail(e.target.value)}/>
                                <label>Email Address</label>
                            </div>
                            <div className="input-group">
                                <input type={showPassword ? "text" : "password"} required value={Password} onChange={(e) => setPassword(e.target.value)} />
                                <label>Password</label>
                                <span
                                    className="buttonShowPassword"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>                            

                            </div>
                            <div className="remember-me mt-4 flex items-center gap-2">
                                <input type="checkbox"  id='rember'  onChange={(e) => setRememberMe(e.target.checked)} />
                                <label htmlFor='rember'>Remember Me</label>
                            </div>
                            <button className="mt-4 login-btn" onClick={() => HandelLogin()}>Login</button>
                            <p className="signup-text">
                            Don't have an account?{" "}
                            <span 
                                className="signup-link" 
                                onClick={() => setState("sign-up")}
                            >
                                Sign up
                            </span>
                            </p>
                        </div>
                        <div className="sign-up" data-aos="fade-right" data-aos-delay="900">
                            <h3 className='mb-3 text-3xl'>Create Account</h3>
                            <div className="input-group">
                                <input type="text" required value={UserName} onChange={(e) => setUserName(e.target.value)}/>
                                <label>User Name</label>
                            </div>
                            <div className="input-group">
                                <input type="email" required value={EmailNew} onChange={(e) => setEmailNew(e.target.value)}/>
                                <label>Email Address</label>
                            </div>
                            <div className="input-group">
                                <input className='passwordInput' type={showPassword ? "text" : "password"} required value={PasswordNew} onChange={(e) => handlePasswordChange(e)}/>
                                <p className='passwordMessage'>{passwordMessage}</p>
                                <label>Password</label>
                                <span
                                    className="buttonShowPassword"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>                            
                            </div>
                            <div className="input-group">
                                <input type="text" required value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                                <label>Phone number</label>
                            </div>
                            <div className="input-group file-input">
                                <input type="file" id="image" accept="image/*" required  onChange={(e) => setImage(e.target.files[0])}/>
                                <label htmlFor="image" className="file-label">Choose Profile Image</label>
                            </div>
                            <button className={`mt-4 login-btn signupButton ${signupState ? "" : "disactive"} `} onClick={() => {HandelSignup()}}>
                                Sign Up
                                
                                
                            </button>
                            <p className="signup-text">
                            Already have an account?{" "}
                            <span 
                                className="signup-link" 
                                onClick={() => setState("login")}
                            >
                                Login
                            </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <div className="loader"> <Loader/> </div>}
            {showCheckOtp && <CheckOTP userEmail ={EmailNew}  onClose={() => {setshowCheckOtp(false) , clearForm();}}/> }
        </>
    );

}

