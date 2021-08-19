import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getTextDataWithId, deleteTextData } from '../../api/translation/translationAPI';
import { getUserData } from '../../api/user/userAPI';
import { POST_LIMIT } from '../../resource/constants';
import { getStorage, removeItemStorage } from '../../storage';
import Post from "./Post"


const Profile = (props) => {
    const history = useHistory();

    const [posts, setPosts] = useState([]);
    const [limitPosts, setLimitPosts] = useState([]);

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
    }, [])

    async function getUserPosts() {
        const userId = (await getUserData(getStorage("username")))[0].id;
        const p = (await getTextDataWithId(userId, 0));
        const lp = (await getTextDataWithId(userId, POST_LIMIT));
        setPosts(p);
        setLimitPosts(lp);
    }

    async function handleClearHistory() {
        for (const post of posts)
            (await deleteTextData(post.id))
        setPosts("");
        setLimitPosts("");
    }


    return (
        <div className="Profile">
            <h1>Your Profile</h1>
            <button id="clearTranslationsBtn" onClick={handleClearHistory} className="btn btn-danger" >Clear history</button>
            <button onClick={handleLogout} className="btn btn-secondary">Sign out</button>
            <div className="translation-field-container">
                <div className="translation-field">
                    <ol>
                        {
                            limitPosts && limitPosts.map((s, i) => <Post key={i} post={s} />)
                        }
                    </ol>
                </div>
            </div>
        </div>


    );
}

export default Profile;
