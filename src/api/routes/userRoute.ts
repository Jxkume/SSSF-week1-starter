import express from 'express';
import {
  checkToken,
  userDelete,
  userDeleteCurrent,
  userGet,
  userListGet,
  userPost,
  userPut,
  userPutCurrent,
} from '../controllers/userController';
import passport from '../../passport';
import {body, param} from 'express-validator';

const router = express.Router();

export const userValidationRules = [
  body('user_name').isLength({ min: 3 }).withMessage('user_name should be at least 3 characters long'),
  body('email').isEmail().withMessage('email should be a valid email'),
  body('password').isLength({ min: 5 }).withMessage('password should be at least 5 characters long'),
];

router
  .route('/')
  .get(userListGet)
  .post(userPost)
  .put(passport.authenticate('jwt', {session: false}), userPutCurrent)
  .delete(passport.authenticate('jwt', {session: false}), userDeleteCurrent);

router.get(
  '/token',
  passport.authenticate('jwt', {session: false}),
  checkToken
);

router
  .route('/:id')
  .get(userGet)
  .put(passport.authenticate('jwt', {session: false}), userPut)
  .delete(passport.authenticate('jwt', {session: false}), userDelete);

export default router;
