import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';



const Login = () => {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.length > 0) {
            history.push('/');
        }
    },[history])
    // This handles the user's name input
    const [username, setUsername] = useState('');
    const handleUserInput = event => {
        setUsername(event.target.value); //asyn
    };

    // This saves the user's name to local storage
    function handleLogin() {
        //  console.log(username);
        //  localStorage.setItem('username', username);
        //  history.push('./')
        if (username.match(/(^[A-Za-z]{1,10})([ ]{0,1})([A-Za-z]{3,10})$/)) {

            localStorage.setItem('username', username)

            const data = { name: username };

            fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    history.push('/Profile');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
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
                <h1>Lost in Translation</h1>
                <h2>Welcome</h2>

                <form className="mt-3">
                    <div className="mb-3" style={{ width:`50%` }}>
                        <input id="username" type="text" placeholder="What's your full name?" className="form-control"  onChange={handleUserInput} />
                    </div>
                    <div>
                        <Link to="/">
                            <button type="submit" onClick={handleLogin} className="btn btn-primary btn-lg"> Login</button>
                        </Link>
                    </div>

                </form>
            </header>
        </main>
    );
}

export default Login;