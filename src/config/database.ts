import { PrismaClient } from '@prisma/client';


export const prisma = new PrismaClient();

// Se quiser usar SQL Server em vez do Postgres:
// 1. Ajuste o provider no schema.prisma
// 2. Adicione no .env: MSSQL_URL="sqlserver://usuario:senha@host:porta;database=nome"
