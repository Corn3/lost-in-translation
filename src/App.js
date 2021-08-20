
import "./App.css";
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Login from "./components/StartupWindow/Login";
import Profile from "./components/ProfileWindow/Profile";
import Translation from "./components/TranslationWindow/Translation";
import NotFound from "./components/NotFound/NotFound";
import AppContainer from "./hoc/AppContainer";
import HeaderContainer from "./hoc/HeaderContainer";
import { MDBIcon } from "mdbreact";
import { Image,  } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getStorage } from "./storage";

const App = () => {

    const [userName, setUserName] = useState("");
    const [page, setPage] = useState("Start");

    useEffect(() => {
        setUserName(getStorage("username"));
    }, [])

    const handleUsername = (name = "") => {
        setUserName(name);
    }

    const changeTitle = (title) => {
        setPage(title);
    }

    return (
        <BrowserRouter>
            <HeaderContainer>
                <div className="main-page-text bold-text">Lost in translation - {page}</div>
                <NavLink to="Profile">
                    <div id="username">
                    <div class="avatar-lg"><Image src="https://bootdey.com/img/Content/avatar/avatar2.png" id="img-avatar" alt="profile-image"/></div>
                        <p id="name-txt"> {userName}</p>
                        
                    
                    </div>
                </NavLink>
                <div className="main-page-profile"></div>
            </HeaderContainer>
            <AppContainer>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Login handleTitle={changeTitle} onLogin={handleUsername} />
                        </Route>
                        <Route path="/profile">
                            <Profile handleTitle={changeTitle} onLogout={handleUsername} />
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
