import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Tạo
router.post('/', verifyAdmin, createHotel)
//Cập nhật
router.put('/:id', verifyAdmin, updateHotel)
//Xóa
router.delete('/:id', verifyAdmin, deleteHotel)
//Lấy 1
router.get('/find/:id', getHotel)
//Lấy tất cả
router.get('/', getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms);
export default router;