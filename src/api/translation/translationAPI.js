
const DEFAULT_URL = "localhost:3006/searches"

export async function postTextData(text) {
    try {
        const response = await fetch(DEFAULT_URL, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
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
        const response = await fetch(DEFAULT_URL);
        return response.json;
    } catch (error) {
        console.log(error);
    }
}