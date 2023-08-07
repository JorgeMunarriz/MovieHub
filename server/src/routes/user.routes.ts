import {Router} from "express";
import {createUser, deleteUserByID, getAllUsers, getUserByID, updateAllUsers, updateUserName} from "../controllers/user.controller";

const UserRouter = Router()

UserRouter
    .post("/", createUser)
    .get("/", getAllUsers)
    .get("/:userID", getUserByID)
    .put("/:userID", updateUserName)
    .delete("/:userID", deleteUserByID)
    .post("/update", updateAllUsers)


export default UserRouter
