import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


// router.get("/checkauthentication", verifyToken, (err, res, next) => {
//     res.status(200).json("Xin chào, bạn đã đăng nhập thành công!");
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })
//Cập nhật
router.put('/:id', verifyUser, updateUser)
//Xóa
router.delete('/:id', verifyUser, deleteUser)
//Lấy 1
router.get('/:id', verifyUser, getUser)
//Lấy tất cả
router.get('/', verifyAdmin, getUsers)

export default router;