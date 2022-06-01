import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
// get / users
// get / users/uuid
// post / users 
//put /users /uuid
// delete /users /uuid

const usersRoute = Router();
// method  GET
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Mario' }]
  res.status(StatusCodes.OK).send({ users })
});

usersRoute.get('/users/uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;

  res.status(StatusCodes.OK).send({ uuid });
});
// method POST
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  console.log(req.body);
  res.status(StatusCodes.CREATED).send(newUser);
});
// method PUT
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifieUser = req.body;
  modifieUser.uuid = uuid;
  res.status(StatusCodes.OK).send(modifieUser);
});

//method delete
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.sendStatus(StatusCodes.OK);

})
export default usersRoute;