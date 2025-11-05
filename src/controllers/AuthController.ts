import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/database.js';

class AuthController {
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            // TODO: Add your user validation logic here
            // This is just a basic example
            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            // TODO: Check user credentials in your database
            // For now, we'll just create a dummy token
            const token = jwt.sign(
                { email },
                process.env.JWT_SECRET || 'your-secret-key',
                { expiresIn: '1h' }
            );

            return res.json({ token });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async register(req: Request, res: Response) {   
        try {
            const { email, password, name } = req.body;

            // TODO: Add your registration logic here
            const user =  await prisma.user.create({
                data: {
                    user_name: name, 
                    email,                       
                    user_password: password,                    
                }
            })
            // This is just a basic example
            if (!email || !password || !name) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // TODO: Add user to database
            // For now, we'll just return a success message
            return res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
    
}

export default new AuthController();