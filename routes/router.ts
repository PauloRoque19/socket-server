

import { Router, Request, Response } from 'express';
export const router = Router();

router.get('/mensagens', ( req: Request , res: Response ) => {
    res.json({
        ok: true,
        mensagem: 'Tudo está bem!!'
    })
});

router.post('/mensagens', ( req: Request , res: Response ) => {

    const msg = req.body.msg;
    const de = req.body.de
    res.status(201).json({
        ok: true,
        msg,
        de
    })
});
router.post('/mensagens/:id', ( req: Request , res: Response ) => {

    const id =  req.params.id;

    const msg = req.body.msg;
    const de = req.body.de
    res.status(201).json({
        ok: true,
        msg,
        de,
        id
    })
});

export default router;