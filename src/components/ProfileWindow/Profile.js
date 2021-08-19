import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getTextDataWithId } from '../../api/translation/translationAPI';
import { getUserData } from '../../api/user/userAPI';
import { getStorage, removeItemStorage } from '../../storage';
import Post from "./Post"

const Profile = (props) => {
    const history = useHistory();

    const [posts, setPosts] = useState([]);

    function handleLogout() {
        removeItemStorage("username");
        props.onLogout("");
    };

    useEffect(() => {
        if (!getStorage("username")) {
            history.push('/');
        } else {
            getUserPosts();
        }
    })

    async function getUserPosts() {
        const userId = (await getUserData(getStorage("username")))[0].id;
        const p = (await getTextDataWithId(userId));
        setPosts(p);
    }

    return (
        <div className="Profile">
            <h1>Your Profile</h1>
            <button id="clearTranslationsBtn" className="btn btn-danger" >Clear history</button>
            <button onClick={handleLogout} className="btn btn-secondary">Sign out</button>
            <ol>
                {
                    posts.map((s, i) => <Post key={i} post={s} />)
                }
            </ol>
        </div>
    );
}

export default Profile;