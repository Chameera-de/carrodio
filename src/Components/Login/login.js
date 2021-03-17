import { useState } from "react"
import { authenticationService } from "../../Backend Services/UserService"
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom"

const Login = () => {

    let history = useHistory()

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        let nam = event.target.name
        let val = event.target.value

        setUserDetails({
            ...userDetails,
            [nam]: val
        })
    }

    const handleSub = (event) => {
        event.preventDefault()
        authenticationService.login(userDetails)
        .then(response =>{
            Swal.fire({
                position: 'middle',
                icon: 'warning',
                title: "Successfully Logged in",
                showConfirmButton: false,
                timer: 2500
            })
            history.push("/")
        })
        .catch(error => {
            Swal.fire({
                position: 'middle',
                icon: 'warning',
                title: error.response.data,
                showConfirmButton: false,
                timer: 2500
            })
            history.push("/auth")
        })
        
    }

    return(
        <>
            <div class="row back">
            </div>
            <div class="row caro">
                <form onSubmit={handleSub}>
                    <div class="imgcontainer">
                        <div class="display-4">WELCOME BACK !</div>
                    </div>
                    <div class="container col">
                        
                        <label for="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="email" onChange={handleChange} required />

                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required />

                        <span style={{float:"right"}}>Forgot <a href="#">password?</a></span><br/>

                        <button class="button" data-micron="squeeze">Login</button>
                        <div class="mt-3">
                            <span class="psw">Don't have an account ? <a href="/register"><strong>Join</strong></a></span>
                        </div>
                    </div>

                    <div class="col mt-4">
                        <a href="#" class="fb btn">
                        <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                        </a>
                        <a href="#" class="twitter btn">
                        <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                        </a>
                        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
                        </i> Login with Google+
                        </a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login