
import "./App.css";
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Startup from "./components/StartupWindow/Startup";
import Translation from "./components/TranslationWindow/Translation";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/StartupWindow/Login";
import Profile from "./components/ProfileWindow/Profile";
import AppContainer from "./hoc/AppContainer";
import HeaderContainer from "./hoc/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <HeaderContainer>
                <div className="main-page-text">Lost in translation</div>
            </HeaderContainer>
            <AppContainer>
                <main>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/Startup" component={Startup} />    
                        <Route path="/Profile" component={ Profile } />
                        <Route path="/translation" component={Translation} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>
            </AppContainer>
        </BrowserRouter>
    );
}

export default App;
