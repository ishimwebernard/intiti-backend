import { Router } from 'express';
import articlesRouter from './articles';
const router = Router();

router.use("/articles", articlesRouter);

export default router;
