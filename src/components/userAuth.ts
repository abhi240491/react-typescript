export const setAuthentication = (value:boolean) => { 
    localStorage.setItem('isAuthenticated',JSON.stringify(value));
}

export const isAuthenticated = () => {
    const auth = localStorage.getItem("isAuthenticated")
    console.log(auth)
    if(auth && auth?.length>0 && auth==='true') {
        return true; 
    } else {
        return false;
    }
}
