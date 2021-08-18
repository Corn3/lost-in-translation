import { BrowserRouter , Switch, Route, } from 'react-router-dom';
import Login from './components/StartupWindow/Login';
import PageNotFound from './components/StartupWindow/PageNotFound';
import Profile from './components/ProfileWindow/Profile';
import Startup from './components/StartupWindow/Startup';
const App = () => {
    return (
       <BrowserRouter>
           
                <div className="App">
                    
                        <Switch>
                            <Route exact path="/" component={Login} />            
                            <Route path="/Startup" component={Startup} />
                            <Route path="/Profile" component={ Profile } />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                   
                </div>
        </BrowserRouter>
        
           
      
    );
}

export default App;
