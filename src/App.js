
import "./App.css";
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
    useHistory
} from "react-router-dom";
import Login from "./components/StartupWindow/Login";
import Profile from "./components/ProfileWindow/Profile";
import Translation from "./components/TranslationWindow/Translation";
import NotFound from "./components/NotFound/NotFound";
import AppContainer from "./hoc/AppContainer";
import HeaderContainer from "./hoc/HeaderContainer";
import { Image, } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getStorage, removeItemStorage } from "./storage";

const App = () => {

    const [userName, setUserName] = useState("");
    const [page, setPage] = useState("Start");
    const [loginAction, setLoginAction] = useState("");
    const [navLinks, setNavLinks] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const user = getStorage("username");
        const login = (!user) ? "" : "Logout"
        setUserName(user);
        setLoginAction(login);
    }, [])

    const handleUsername = (name = "") => {
        setUserName(name);
    }

    const changeTitle = (title) => {
        setPage(title);
        if (getStorage("username"))
            addLinksToNav();
    }

    const handleLoginAction = () => {
        if (loginAction === "Logout" && window.confirm("Are you sure you wish to logout?")) {
            removeItemStorage("username");
            setPage("");
            setUserName("");
            setLoginAction("");
            setNavLinks([]);
        }
    }

    const addLinksToNav = () => {
        setLoginAction("Logout")
        setNavLinks(["Create post", "Logout"]);
    }

    return (
        <BrowserRouter>
            <HeaderContainer>
                <div className="main-page-text bold-text">Lost in translation - {page}</div>
                <NavLink id="profile-container" to="Profile">
                    <div id="username">
                        <Image src="https://bootdey.com/img/Content/avatar/avatar2.png" id="img-avatar" alt="profile-image" />
                        <p id="name-txt"> {userName}</p>
                    </div>
                </NavLink>
                <ul className="link-bar">
                    <li>
                        <NavLink to={page} onClick={handleLoginAction}>
                            {navLinks[1]}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="translation">
                            {navLinks[0]}
                        </NavLink>
                    </li>
                </ul>
            </HeaderContainer>
            <AppContainer>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Login handleTitle={changeTitle} onLogin={handleUsername} />
                        </Route>
                        <Route path="/profile">
                            <Profile handleTitle={changeTitle} />
                        </Route>
                        <Route path="/translation">
                            <Translation handleTitle={changeTitle} />
                        </Route>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>
            </AppContainer>
        </BrowserRouter>
    );
}

export default App;
