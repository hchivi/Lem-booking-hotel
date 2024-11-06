import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";

const router = express.Router();

//Tạo
router.post('/:hotelid', verifyAdmin, createRoom)
//Cập nhật
router.put('/availability/:id', updateRoomAvailability)
router.put('/:id', verifyAdmin, updateRoom)
//Xóa
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)
//Lấy 1
router.get('/:id', getRoom)
//Lấy tất cả
router.get('/', getRooms)

export default router;