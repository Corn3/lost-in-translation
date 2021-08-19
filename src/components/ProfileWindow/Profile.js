import {Link } from 'react-router-dom';
import { MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Profile = () => {
    const username = localStorage.getItem('username');
    
    function handleLogout() {
        localStorage.clear();
    };

    return (
        <div className="Profile">
               <h1>Your Profile</h1>
               <div id="username">
              <p> <MDBIcon icon="user" className="mr-2" /> {username}</p>
            </div>
            <button id="clearTranslationsBtn"  className="btn btn-danger" >Clear history</button>
            <Link to="/">
                <button  onClick={handleLogout} className="btn btn-secondary">Sign out</button>
            </Link>

        </div>
    );
}

export default Profile;