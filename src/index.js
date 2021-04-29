import Express from 'express';
import { Router } from 'express';
import Routes from './routes/index';

const app = Express();
app.use(Routes);
app.listen(3000, ()=>{
    console.log("Server Started");
})