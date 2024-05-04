// In your router.js file
import express from 'express';
import { getUsers, addUser, updateUser, deleteUser, checkIt } from '../contraller.js';

const router = express.Router();

router.post('/getUsers', getUsers);
router.post('/checkIt', checkIt);
router.post('/createUser', addUser);
router.post('/updateUser', updateUser);
router.post('/deleteUser', deleteUser);

export default router;
