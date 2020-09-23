import {  Request, Response, NextFunction } from 'express';
import * as dataAuth from '../../auth.json'; 
import * as jwt from 'jsonwebtoken';

async function verifyAuth(request: Request, response: Response, next: NextFunction) {
    const authHeader = <string>request.headers.auth;

    if (!authHeader) {
        handleError('No auth token provided', response);
    }
    
    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        handleError('Token Error', response);
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$^/i.test(scheme)) {
        handleError('Token malformatted', response);
    }

    jwt.verify(token, dataAuth.secret, (error, decoded) => {
        if (error) {
            handleError('auth token invalid', response);
        }

        request.cod_usu = decoded.id;

        return next();
    });
    
}   


function handleError(message: string, response: Response): Response {
    return response.status(401).json({
        res: {
            message: message,
            data: {}
        }
    });
}


export { verifyAuth };