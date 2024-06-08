import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSignUp1Mutation } from './features/adsSlice/Api';

const SignUp = () => {
    const dispatch = useDispatch();
    const [signUp, { isSuccess ,isLoading}] = useSignUp1Mutation();
    const [formData, setFormdata] = useState({
        email: '',
        userName: '',
        password: '',
        confirmPassword: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signUp(formData);
            if (isSuccess === true) {
                console.log("Signup successful");
                localStorage.setItem("token",res.token)
            }
        } catch (error) {

        }
    } 
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "", gap: "15px" }}>
            <form action="" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "", gap: "15px" }} >
                <input style={{ height: "30px" }} placeholder='email' type="email" value={formData.email} name="email" id="1" onChange={(e) => setFormdata(e.target.value)} />
                <input style={{ height: "30px" }} placeholder='username' type="text" value={formData.userName} name="useraName" id="2" onChange={(e) => setFormdata(e.target.value)} />
                <input style={{ height: "30px" }} placeholder='password' type="password" value={formData.password} name="password" id="3" onChange={(e) => setFormdata(e.target.value)} />
                <input style={{ height: "30px" }} placeholder='confirm Password' type="password" value={formData.confirmPassword} name="confirmPassword" id="4" onChange={(e) => setFormdata(e.target.value)} />
                <button type='submit' disabled={isLoading}> {isLoading ? "Loading..." : "Submit"} </button>
            </form>
        </div>
    )
}

export default SignUp
