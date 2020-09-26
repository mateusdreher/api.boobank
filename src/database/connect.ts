import { createConnection } from 'typeorm';

function connect():void {
    
    console.log('Connecting....');


    createConnection().then(() => {
        console.log('Conexão com o banco bem sucedida');
    }).catch((error) => {
        console.error(error);
    });
}

export { connect };
