import {Router} from 'express';
import cabinController from '../controllers/cabin.controller.js';

const router = Router();

// Routes

// Dev routes
router.get('/getCabinsDev', cabinController.cabinCtrlDev.getCabins);
router.post('/addCabinDev' ,cabinController.cabinCtrlDev.createCabin);


// Production routes
router.get('/getCabins', cabinController.cabinCtrl.getCabins);
router.get('/createCabin', cabinController.cabinCtrl.createCabin);

export default router;