export const checkUser = async (url, body) => {
  const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  if (!response.ok) {
    return false;
    } else {
      return response.json();
  }
}

export default checkUser;