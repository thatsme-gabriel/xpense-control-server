import { Router } from "express";
import UserController from "../controllers/UserController.js";



export const userRouter = Router();
/**
 * @swagger
 * /user/users:
 *   get:
 *     summary: Listar todos os usuários
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               
 *       401:
 *         description: Credenciais inválidas
 */
userRouter.get("/users", UserController.getAllUsers);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Obter usuário por ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 user_name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Credenciais inválidas
 */
userRouter.get("/:id", UserController.getUserById); 