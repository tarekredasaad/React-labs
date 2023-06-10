import { useState } from "react"

function RegisterForm() {

    const [userData, setUserData] = useState({
        name:"",
        email:"",
        username:"",
        password:"",
        confirmPwd:""
    })
    const [errors, setErrors] = useState({
        nameErr:"",
        emailErr:"",
        usernameErr:"",
        passwordErr:"",
        confirmPwdErr:""
    })

    const changeUserData = (e) => {
        if(e.target.name == "name"){
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErrors({
                ...errors,
                nameErr: e.target.value.length == 0 && "This Field Is Required" 
                
            })
        }
        else if(e.target.name == "email") {
            setUserData({
                ...userData,
                email: e.target.value
            })

            setErrors({
                ...errors, 
                emailErr: e.target.value.length == 0 ?
                "This Field Is Required" : !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(e.target.value)) && 
                "Not valid Email, must be like hello@example.com"
            })
        }
        else if(e.target.name == "username") {
            setUserData({
                ...userData,
                username: e.target.value
            })

            setErrors({
                ...errors, 
                usernameErr: e.target.value.length == 0 ? "This Field Is Required" : !(/^\S*$/).test(e.target.value) &&
                "username must contain no spaces"
            })
        }
        else if(e.target.name == "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })

            setErrors({
                ...errors, 
                passwordErr: e.target.value.length == 0 ? "This Field Is Required" :  e.target.value.length < 8 ? 
                "Min Length is 8 Charachters" : !/^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/.test(e.target.value) &&
                "contains at least one lowercase , one uppercase , at least one digit and special character"
            })
        }
        else if(e.target.name == "confirmPwd") {
            setUserData({
                ...userData,
                confirmPwd: e.target.value
            })

            setErrors({
                ...errors, 
                confirmPwdErr: e.target.value.length == 0 ? "This Field Is Required" :  e.target.value != userData.password && 
                "input does not matche the previous password"
            })
        }

    }

    return (
        <div class="form-container mx-auto my-5">
            <h2 class="text-info text-center m-3">Register Form</h2>
            <div class="border p-3">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" id="name" 
                        className={`form-control ${errors.nameErr && 'border-danger'}`} 
                        value={userData.name} onChange={(e) => changeUserData(e)} name="name"/><br/>
                        
                        {errors.nameErr != "" && 
                            <div class="alert alert-danger">
                                <strong>!</strong> {errors.nameErr}.
                            </div>
                        }                        
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        className={`form-control ${errors.emailErr && 'border-danger'}`} 
                        value={userData.email} onChange={(e) => changeUserData(e)} name="email"/><br/>
                        
                        {errors.emailErr != "" && 
                            <div class="alert alert-danger">
                                <strong>!</strong> {errors.emailErr}.
                            </div>
                        }
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        
                    </div>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" id="username" 
                        className={`form-control ${errors.usernameErr && 'border-danger'}`} 
                        value={userData.username} onChange={(e) => changeUserData(e)} name="username"/><br/>
                        
                        {errors.usernameErr != "" && 
                            <div class="alert alert-danger">
                                <strong>!</strong> {errors.usernameErr}.
                            </div>
                        }                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" id="exampleInputPassword1" 
                        className={`form-control ${errors.passwordErr && 'border-danger'}`}
                        value={userData.password} onChange={(e) => changeUserData(e)} name="password"/><br/>

                        {errors.passwordErr != "" && 
                            <div class="alert alert-danger">
                                <strong>!</strong> {errors.passwordErr}.
                            </div>
                        }
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                        <input type="password" id="exampleInputPassword2" 
                        className={`form-control ${errors.confirmPwdErr && 'border-danger'}`}
                        value={userData.confirmPwd} onChange={(e) => changeUserData(e)} name="confirmPwd"/><br/>

                        {errors.confirmPwdErr != "" && 
                            <div class="alert alert-danger">
                                <strong>!</strong> {errors.confirmPwdErr}.
                            </div>
                        }
                        
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>

                    <button type="submit" class="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;