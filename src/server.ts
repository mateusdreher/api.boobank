import { APP } from './app';

const PORT = process.env.PORT || 3333;

const SERVER = APP.listen(PORT);

if (SERVER) {
    console.log(`Servidor rodando na porta ${PORT}`);
}