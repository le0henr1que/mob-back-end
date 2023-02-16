import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../shared/errors/appError';

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    
    console.log("Middleware pass")

  if (err instanceof AppError) {
        
    console.log("Middleware pass instance of")

    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
    
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
  
}