import {  Request, Response, NextFunction } from 'express';
import * as dataAuth from '../../auth.json'; 
import * as jwt from 'jsonwebtoken';

interface ITokenData { 
    id: string,
    iat: number,
    exp: number
}

async function authenticationMiddleware(request: Request, response: Response, next: NextFunction): Promise<void | Response> {
    const authHeader = <string>request.headers.auth;

    if (!authHeader) {
        return response.status(401).json({
            res: {
                statusCode: 7,
                message: 'Error: No auth token provided',
                data: {}
            }
        });
    }
    
    const token = authHeader.replace('Bearer', '').trim();


    try {
        const data: ITokenData = jwt.verify(token, dataAuth.secret) as ITokenData;

        request.cod_usu = data.id; 

        return next();
    }
    catch(error) {
        return response.status(401).json({
            res: {
                statusCode: 7,
                message: error.message || 'Error: Token invalid',
                data: {}
            }
        });
    }
}   



export { authenticationMiddleware };