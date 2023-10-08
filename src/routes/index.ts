import express from 'express';
import readingRoutes from './ReadingRoutes';
import staffRoutes from './StaffRoutes';
import authRoutes from './AuthRoutes';
import customerRoutes from './CustomerRoutes';
import { auth } from "../middleware/AuthMiddleware";


const router = express.Router();


router.use('/readings', auth, readingRoutes);

router.use('/staff', staffRoutes);

router.use('/auth', authRoutes);

router.use('/customers', customerRoutes);


export default router;
