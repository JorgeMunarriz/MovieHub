import {  VITE_URL_USERS } from "../global/serverUrl";



export type UserProps = {
  id: string;
  name: string;
  email: string;
  movies: string[];
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(VITE_URL_USERS);
    const users = await response.json();
    return users;
  } catch (error) {
    throw new Error("error fetching users");
  }
};

export const getUserByID = async (id: string) => {
  try {
    const response = await fetch(VITE_URL_USERS + `/${id}`);
    const userById = await response.json();

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


