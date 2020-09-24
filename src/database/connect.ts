import { createConnection } from 'typeorm';

function connect():void {
    
    createConnection().then(() => {
        console.log('Conexão com o banco bem sucedida');
    });
}

export { connect };
