import {Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { removeItemStorage } from '../../storage';

const Profile = (props) => {

    function handleLogout() {
        removeItemStorage("username");
        props.onLogout("");
    };

    return (
        <div className="Profile">
            <h1>Your Profile</h1>
            <button id="clearTranslationsBtn"  className="btn btn-danger" >Clear history</button>
            <button  onClick={handleLogout} className="btn btn-secondary">Sign out</button>
        </div>
    );
}

export default Profile;