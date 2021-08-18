
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
import AppContainer from "./hoc/AppContainer";

const App = () => {
    return (
        <BrowserRouter>
            <AppContainer>
                <div>
                    <h1>
                        Lost in translation
                    </h1>
                </div>
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
