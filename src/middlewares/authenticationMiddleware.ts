import {  Request, Response, NextFunction } from 'express';
import * as dataAuth from '../../auth.json'; 
import * as jwt from 'jsonwebtoken';

async function authenticationMiddleware(request: Request, response: Response, next: NextFunction) {
    const authHeader = <string>request.headers.auth;

    if (!authHeader) {
        return response.status(401).json({
            res: {
                message: 'Error: No auth token provided',
                data: {}
            }
        });
    }
    
    const token = authHeader.replace('Bearer', '').trim();


    try {
        const data = jwt.verify(token, dataAuth.secret);

        request.cod_usu = data.id;

        return next();
    }
    catch(error) {
        return response.status(401).json({
            res: {
                message: error.message || 'Error: Token invalid',
                data: {}
            }
        });
    }
}   



export { authenticationMiddleware };