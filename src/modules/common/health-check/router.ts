import {Router, Request, Response} from "express";

export const appRouter = () => {
    const router = Router();

    router.get('/', (req: Request, res: Response) => {
        res.send(`SERVER UP; ${new Date()}`);
    });

    return router;
}