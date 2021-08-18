import {Link} from 'react-router-dom'
import React from "react";
const PageNotFound = () =>{
    return(
        <div>
            <h1>
                Page NotFound
            </h1>
            <Link to="/Login">
                Back to login page
            </Link>
        </div>
    )
}
export default PageNotFound;