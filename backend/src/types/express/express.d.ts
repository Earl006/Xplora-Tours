// src/types/express.d.ts
import { User } from '@prisma/client';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      userId: string;
      isAdmin: boolean;
    };
  }
}
