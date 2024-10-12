import * as express from 'express';
import { User } from './users/user.interface';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
