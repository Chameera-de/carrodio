import { useState } from "react"
import { authenticationService } from "../../Backend Services/UserService"
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const Register = () => {

    let history = useHistory()

    const [userDetails, setUserDetails] = useState({
        firstname: '',
        lastname: '',
        email:'',
        tpnumber: '',
        password: '',
        repassword: ''
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
        authenticationService.register(userDetails)
        .then(response =>{
            Swal.fire({
                position: 'middle',
                icon: 'warning',
                title: "Successfully Registered",
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
            history.push("/register")
        })
        
    }

    return(
        <>
            <div class="row back">
            </div>
            <div class="row caro">
                <form onSubmit={handleSub}>
                    <div class="imgcontainer">
                        <div class="display-4">CREATE AN ACCOUNT</div>
                    </div>
                    <div class="container">
                        
                        <div class="col">
                            <label for="firstname"><b>First Name</b></label>
                            <input type="text" placeholder="Enter Firstname" name="firstname" onChange={handleChange} required />
                        </div>

                        <div class="col">
                            <label for="lastname"><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Lastname" name="lastname" onChange={handleChange} required />
                        </div>

                        <div class="col">
                            <label for="email"><b>Email</b></label>
                            <input type="email" placeholder="Enter Email" name="email" onChange={handleChange} required />
                        </div>

                        <div class="col">
                            <label for="tpnumber"><b>Phone Number</b></label>
                        <   input type="text" placeholder="Enter Telephone number" name="tpnumber" onChange={handleChange} required />
                        </div>
                        <div class="col">
                            <label for="passoword"><b>Password</b></label>
                            <input type="password" placeholder="Password" name="password" onChange={handleChange} required />
                
                            <label for="repassword"><b>Retype Password</b></label>
                            <input type="password" placeholder="Retype Password" name="repassword" onChange={handleChange} required />
                        </div>
                        <div class="col">
                            <button class="button mt-5" data-micron="squeeze">Register</button>
                            <span class="psw mt-3">Already have an account ? <a href="/auth"><strong>Log In</strong></a></span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register