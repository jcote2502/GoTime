import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
    // const password = 'password'
    const [inputValue, setInputValue] = useState('');
    const [showText, setShowText] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (inputValue === process.env.REACT_APP_ADMIN_PASSWORD) {
            navigate('privileged')
        } else {
            setShowText(true);
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setShowText(false);
    }
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '40%', alignSelf: 'center',padding:'25vh 0 25vh 0' }}>
                    <div style={{ color: 'white', textAlign: 'center', fontSize: '45px', padding:'25px' }}>Admin Login</div>
                    <input
                        type="password"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Password"
                        style={{color:'white', height:'50px', fontSize:'24px',margin:'50px'}}
                    />
                    <button style={{color:'white',fontSize:'32px'}} onClick={handleSubmit}>Submit</button>
                    {showText && <div>Incorrect Password</div>}
                </div>
            </div>
        </>
    );
}

export default LoginAdmin;