import type { Request, Response } from "express";
import { prisma } from "../config/database.js";

class UserController {

    async getAllUsers(req: Request, res: Response) {
        try{
            const users = await prisma.user.findMany({
                orderBy: {id: 'asc'}
            });
            return res.json(users);
        }catch(error){
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getUserById(req: Request, res: Response) {
        try{
            const id  = parseInt(req.params.id || '0');

            const user = await prisma.user.findUnique({
                where: {id}
            });

            if(!user){
                return res.status(404).json({ error: 'User not found' });
            }

        }catch(error){
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default new UserController();    