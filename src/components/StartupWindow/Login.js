import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getUserData, postUserData } from '../../api/user/userAPI';
import { getStorage } from '../../storage';



const Login = props => {
    const history = useHistory();
    useEffect(() => {
        if (getStorage("username")) {
            history.push('/');
        }
    })
    // This handles the user's name input
    const [username, setUsername] = useState('');
    const handleUserInput = event => {
        setUsername(event.target.value); //asyn
    };

    // This saves the user's name to local storage
    async function handleLogin() {
        if (username.match(/(^[A-Za-z]{1,10})([ ]{0,1})([A-Za-z]{3,10})$/)) {

            localStorage.setItem('username', username)

            const data = { name: username };
            postUserData(data);
            props.onLogin(username);
        }

        else if (username === null || username === "") {
            alert('Error: Please Fill the Required Field')
        }
        else {
            alert('Error: user input must only contain letters between 3 to 10 ')
        }
    };

    return (
        <main className="Login">
            <header>
                <h2>Welcome</h2>

                <form className="mt-3">
                    <div className="mb-3"  id="mb">
                        <input id="username" type="text" placeholder="What's your full name?" className="form-control"  onChange={handleUserInput} />
                    </div>
                    <div>
                        <button type="submit" onClick={handleLogin} className="btn btn-primary btn-lg"> Login</button>
                    </div>

                </form>
            </header>
        </main>
    );
}

export default Login;