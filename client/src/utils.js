export function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
}

export function getToken() {
  const tokenString = localStorage.getItem('token');
  try {
    const userToken = JSON.parse(tokenString);
    return userToken?.token 
  } catch(e) {
      return ''
  }
}

export function clearToken() {
  localStorage.setItem('token', '');
}
