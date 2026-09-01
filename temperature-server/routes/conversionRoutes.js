import express from 'express';
import { convertTemperature } from '../controllers/conversionController.js';

const router = express.Router();

router.post('/convert', convertTemperature);

export default router;