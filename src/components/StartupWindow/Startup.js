// import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
const Startup = () => {
    const username = localStorage.getItem('username');
    return (
        // <div className="Startup">
        //     <h1>This is a temp header</h1>
        // </div>
        
        <div>
            <Link to="/Profile">
                <div id="username">
                    {username}
                </div>
            </Link>
    
        </div>

    
    );
}

export default Startup;