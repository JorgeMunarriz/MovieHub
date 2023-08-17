import { VITE_URL } from "../global/serverUrl";

const VITE_URL_USERS = `${VITE_URL}users`;

export type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  movies: string[];
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(VITE_URL_USERS);
    const users = await response.json();
  

    // console.log(users);
    //console.log(users.allUsers[1].movies[0].genres)
    return users;
  } catch (error) {
    throw new Error("error fetching users");
  }
};

export const getUserByID = async (id: string) => {
  try {
    const response = await fetch(VITE_URL_USERS + `/${id}`);
    const userById = await response.json();

    
    //console.log(userById);

    return userById;
  } catch (error) {
    throw new Error("error fetching users");
  }
};
export const updateUserByID = async (id: string) => {
  try {
    const response = await fetch(VITE_URL_USERS + `/${id}`);
    const userById = await response.json();

    console.log("funciona");
    console.log(userById);

    return userById;
  } catch (error) {
    throw new Error("error fetching users");
  }
};


