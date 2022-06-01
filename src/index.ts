import express from 'express';
import statusRote from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();
// configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// configuração da rota 
app.use(usersRoute);

app.use(statusRote);

// inicialização servidor
app.listen(3000, () => {
    console.log('aplicação executando na porta 3000')
});