import React from 'react';
import { Redirect } from 'react-router';
import { authenticationService } from '../Backend Services/UserService';
import Footer from './Common/footer';

function LayOut({page}){

    let role = false
    if(authenticationService.currentUserValue==null){
        role = false
    }else{
        role = true
    }

    return(
        <>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a class="navbar-brand" href="#">Car Rodio</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/cars">CARS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/services">SERVICES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/aboutus">ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/news">NEWS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contactus">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        {role && <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">Profile</a>
                                <a class="dropdown-item" onClick={authenticationService.logout} href="/">Logout</a>
                            </div>
                        </li>}
                        {!role && <a type="button" class="btn btn-outline-dark" href="/auth">Log In</a>}
                        {!role && <a type="button" class="btn btn-outline-dark ml-3" href="/register">Sign Up</a>}
                    </ul>
                </nav>

                <div id="layoutSidenav_content">
                    <main style={{marginTop: "4rem"}}>
                        {page}
                        <Footer/>
                    </main>
                </div>
              
        </div>
    </>
    )
}


export default LayOut;