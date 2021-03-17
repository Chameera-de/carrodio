import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = (props) => {

    const { component: Component, ...rest } = props;
    if(localStorage.currentUser === undefined){

        Swal.fire({
            position: 'middle',
            icon: 'warning',
            title: 'You need to Login In first',
            showConfirmButton: false,
            timer: 2500
          })

        return (
            <Redirect to={'/auth'} />
        )
    }
    
    return (
        <div>
            <Route
                {...rest}
                render={props => (
                    <Component {...props} />
                )}
            />
        </div>
    )
}

export default PrivateRoute
