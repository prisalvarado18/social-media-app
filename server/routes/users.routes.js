import express from 'express';

import {
	getUser,
	getUserFriends,
	addRemoveFriend,
} from '../controllers/users.controller.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

//Read routes
router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFriends);

//Update routes
router.patch('/:id/:friendId', verifyToken, addRemoveFriend);

export default router;
