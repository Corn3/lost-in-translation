import { DEFAULT_URL } from "../../resource/constants";
const TEXT_DEFAULT_URL = DEFAULT_URL + "searches";

export async function postTextData(text) {
    try {
        const response = await fetch(TEXT_DEFAULT_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(text)
        });
        return response.json;
    } catch (error) {
        console.log(error);
    }
}

export async function getTextData() {
    try {
        const response = await fetch(TEXT_DEFAULT_URL);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getTextDataWithId(id, limit = 0) {
    try {
        const url = TEXT_DEFAULT_URL + "?poster_id=" + id + ((limit > 0) ? "&_limit=" + limit : "");
        console.log(url)
        const response = await fetch(url);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.log(error);
    }
}