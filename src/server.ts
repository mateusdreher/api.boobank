import { app } from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;



try {
    app.listen(PORT);
    
    console.log(`Servidor rodando na porta ${PORT}`);
}
catch(error) {
    console.error(error);

}