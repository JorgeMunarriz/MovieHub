import { NextFunction, Request, Response } from "express";
import { InsufficientScopeError, InvalidRequestError, InvalidTokenError, UnauthorizedError } from "express-oauth2-jwt-bearer";

export const errorHandler = async (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof InsufficientScopeError) {
    const message = "Permission denied";
    res.status(error.status).send({ message });
    return;
  }
  if (error instanceof InvalidTokenError) {
    const message = "Bad credentials";
    res.status(error.status).send({ message });
    return;
  }
  if (error instanceof UnauthorizedError) {
    const message = "Bad Text";
    res.status(error.status).send({ message });
    return;
  }
  if (error instanceof InvalidRequestError) {
    const message = "Invalid Request";
    res.status(error.status).send({ message });
    return;
  }

  const status = 500;
  const message = "Interna Server Error";
  res.status(status).send({ message });
};
