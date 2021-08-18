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
                        TEST
                    </h1>
                </div>
                <main>
                    <Switch>
                        <Route path="/" exact component={Startup} />
                        <Route path="/translation" component={Translation} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>
            </AppContainer>
        </BrowserRouter>
    );
}

export default App;