import express from 'express';
import readingRoutes from './ReadingRoutes';
import staffRoutes from './StaffRoutes';
import authRoutes from './AuthRoutes';
import { auth } from "../middleware/AuthMiddleware";


const router = express.Router();


router.use('/readings', auth, readingRoutes);

router.use('/staff', staffRoutes);

router.use('/auth', authRoutes);


export default router;
