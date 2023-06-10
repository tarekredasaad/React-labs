import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../Styles/style.css'

function LoginForm() {

    const [userData, setUserData] = useState({
        email:"Shaima@yahoo.com",
        password:""
    })
    const [errors, setErrors] = useState({
        emailErr:"",
        passwordErr:""
    })

    const [isShown, setIsShown] = useState(false);

    const togglePassword = () => {
        setIsShown((isShown) => !isShown);
    };

    const changeUserData = (e) => {
        if(e.target.name == "email"){
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
        else{
            setUserData({
                ...userData,
                password: e.target.value
            })

            setErrors({
                ...errors, 
                passwordErr: e.target.value.length == 0 ? "This Field Is Required" :  e.target.value.length < 8 && 
                "Min Length is 8 Charachters"
            })
        }

    }

    return (
        <div class="form-container mx-auto my-5">
            <h2 class="text-info text-center m-3">Login Form</h2>
            <div class="border p-5">
                <form>
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
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type={isShown ? "text" : "password"} id="exampleInputPassword1" 
                        className={`form-control ${errors.passwordErr && 'border-danger'}`}
                        value={userData.password} onChange={(e) => changeUserData(e)} name="password"/>

                        <div className="input-group-btn">
                            <input type="button" onClick={() => togglePassword()}/>
                            { isShown ? <FontAwesomeIcon icon={faEye} />:<FontAwesomeIcon icon={faEyeSlash} /> }
                       
                        </div><br/>

                        {errors.passwordErr != "" && 
                            <div class="alert alert-danger">
                                <strong>!</strong> {errors.passwordErr}.
                            </div>
                        }
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>

                    <button type="submit" class="btn btn-info">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;