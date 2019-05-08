export const fetchData = async (url) => {
    const response = await fetch(url)
    if(!response.ok) {
      throw Error('Fetch went wrong')
    }
    return await response.json() 
  }