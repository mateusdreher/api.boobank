import { app } from './app';

const PORT = process.env.PORT || 3333;

const server = app.listen(PORT);

if (server) {
    console.log(`Servidor rodando na porta ${PORT}`);
}