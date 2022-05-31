import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();
app.use(usersRoute);

app.get('/status', (req: Request , res:Response , next:NextFunction) => {
res.status(200).send({foo: 'I love javascrispt  my  faverite language hello word '});
});
app.listen(3000, () =>{
console.log('aplicação executando na porta 3000')
});