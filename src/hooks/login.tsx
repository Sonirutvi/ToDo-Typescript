import React, { useState } from "react";

function LoginControl(){
    const [isLogin, setIsLogin] = useState(false)
    
    const loginControl = () => {
        setIsLogin(false)
    }
    const logoutControl = () => {
        setIsLogin(true)
    }

let button;
if (isLogin) {
     button = <button onClick={loginControl}>Logout</button>
} else {
     button = <button onClick={logoutControl}>Login</button>
}
return (
    <>
        {button}
    </>
)

}

export default LoginControl