export const getToken = (name) => {
   return localStorage.getItem(name)
}

export const setToken = (name, value) =>{
    localStorage.setItem(name, value)
}