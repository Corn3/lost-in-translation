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
        history.push("/");
    };

    useEffect(() => {
        if (!getStorage("username")) {
            history.push('/');
        } else {
            getUserPosts();
        }
        props.handleTitle("Profile");
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

    function onTranslationClick() {
        history.push("/translation");
    }


    return (
        <div className="Profile">
            <div className="button-group">
                <button id="clearTranslationsBtn" onClick={handleClearHistory} className="btn btn-danger" >Clear history</button>
                <button onClick={handleLogout} className="btn btn-secondary">Sign out</button>
                <button onClick={ onTranslationClick } className="btn btn-primary">Translate</button>
            </div>
            <div className="posts-field-container">
                <div className="posts-field">
                    <ol>
                        {
                            limitPosts && limitPosts.map((s, i) => <Post key={i} post={s} />)
                        }
                    </ol>
                </div>
                <footer className="translation-field-footer">
                    <div className="translation-field-info">Posts</div>
                </footer>
            </div>
        </div>


    );
}

export default Profile;
