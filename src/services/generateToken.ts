import * as jwt from 'jsonwebtoken';
import * as dataAuth  from '../../auth.json';

function generateJWTToken(cod_usu: string): string {
    return jwt.sign({ id: cod_usu }, dataAuth.secret, {
        expiresIn: 1800
    });
}

export { generateJWTToken };