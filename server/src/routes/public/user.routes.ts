import {Router} from "express";
import {createUser, deleteUserByID, deleteUsers, getAllUsers, getUserByID, updateUserByID} from "../../controllers/";

const UserRouter = Router()

UserRouter
    .post("/", createUser)
    .get("/", getAllUsers)
    .get("/:userID", getUserByID)
    .put("/:userID", updateUserByID)
    .delete("/:userID", deleteUserByID)
    .delete("/:email", deleteUsers)


export default UserRouter
