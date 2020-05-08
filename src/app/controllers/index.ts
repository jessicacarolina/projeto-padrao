import { Request, Response } from 'express';
import { insertTests, getAllTests } from '../models/index';

export async function insertTest(
    req: Request,
    res: Response,
): Promise<Response> {
    const { name, email, password } = req.body;

    const testes = await insertTests(name, email, password);

    return res.json({
        message: 'Test successfully registered!',
        testes,
    });
}

export async function getAllTest(
    req: Request,
    res: Response,
): Promise<Response> {
    const all = await getAllTests();

    return res.json({ data: all });
}
