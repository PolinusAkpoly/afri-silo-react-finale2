

export const baseUrl = () => {
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:9090/api/"
    }
    if (process.env.NODE_ENV === "production") {
      return "https://api.afrisilo.com/api/"
    }
  }
  
  export const apiUrl = baseUrl()