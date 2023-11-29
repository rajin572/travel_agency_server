import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    successs: true,
    message: 'Welcome To Tour & Travel Agency',
  });
});

export default app;
