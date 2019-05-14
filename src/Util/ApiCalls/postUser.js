export const postUser = async (url, body) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!response.ok) {
         throw new Error('Something went wrong')
    } else {
        return response.json();
    }
}

export default postUser;