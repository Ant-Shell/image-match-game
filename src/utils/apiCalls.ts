const API_KEY = import.meta.env.VITE_APP_API_KEY;

const getImages = async () => {
  try {
    const response = await fetch("https://api.pexels.com/v1/curated?per_page=8", {
      headers: {
        Authorization: API_KEY
      }
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
    throw error
  }
}

export { getImages };
