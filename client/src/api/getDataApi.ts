import { VITE_URL } from '../global/serverUrl';


// const VITE_URL_USERS = `${VITE_URL}users`;


export const getDataApi = async (endpoint: string, getToken: any) => {
  const token = getToken();
  
  try {
    const response = await fetch(`${VITE_URL}${endpoint}`,  { method: "GET",  headers: {authorization: `Bearer${token}`} });
    const data = await response.json();
  

    console.log(data);
    return data;
  } catch (error) {
    throw new Error("error fetching users");
  }
};