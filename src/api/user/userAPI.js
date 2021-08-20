import { DEFAULT_URL } from "../../resource/constants";

const USERS_DEFAULT_URL = DEFAULT_URL + "users";
/**
* Posts user data to the database,
*/

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
/**
* This Fetches user data.
*/
export async function getUserData(name) {
    try {
        const response = (await fetch(USERS_DEFAULT_URL + "?name=" + name));
        const user = (await response.json());
        return user;
    } catch (error) {
        console.log("Error: ", error)
    }
}