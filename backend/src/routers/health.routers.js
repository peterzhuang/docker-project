import express from 'express';
import {testResponse, ping} from '../controllers/health.controller.js';

const router = express.Router();

router.get('/test', testResponse);

router.get('/healthcheck', ping);

export default router;