import { DEFAULT_URL } from "../../resource/constants";

const USERS_DEFAULT_URL = DEFAULT_URL + "users";

export async function postUserData(data) {
    fetch(USERS_DEFAULT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export async function getUserData(name) {
    const user = await fetch(USERS_DEFAULT_URL + "?name=" + name)
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
    return user;
}