import { Router  } from 'express';
const router = Router();

router.get("/", (req, res)=>{
    res.status(200).send("Success",)
});
router.post("/")

export default router;
