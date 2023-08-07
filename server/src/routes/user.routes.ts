import {Router} from "express";
import {createUser, deleteUserByID, getAllUsers, getUserByID, updateUserByID} from "../controllers/user.controller";

const UserRouter = Router()

UserRouter
    .post("/", createUser)
    .get("/", getAllUsers)
    .get("/:userID", getUserByID)
    .put("/:userID", updateUserByID)
    .delete("/:userID", deleteUserByID)


export default UserRouter
