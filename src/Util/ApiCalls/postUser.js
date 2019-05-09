export const postUser = async (url, body) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default postUser;