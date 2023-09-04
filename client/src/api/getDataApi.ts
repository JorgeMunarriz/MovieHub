import { VITE_URL } from '../global/serverUrl';
import { GetTokenFunction } from '../types/moviehub.types';

export const getDataApi = async (endpoint: string, getToken: GetTokenFunction) => {
  const token = await getToken();
  
  try {
    const response = await fetch(`${VITE_URL}${endpoint}`,  { method: "GET",  headers: {authorization: `Bearer ${token}`} });
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("error fetching data");
  }
};


export const getDataApiPublic = async (endpoint: string) => {  
  try {
    const response = await fetch(`${VITE_URL}${endpoint}`);
    const data = await response.json();
    
    return data;
  } catch (error) {
    throw new Error("error fetching data");
  }
};