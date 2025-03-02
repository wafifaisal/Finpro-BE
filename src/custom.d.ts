import { User } from "../prisma/generated/client";
import { Request } from "express";
import "express";

export type UserPayload = {
  id: string;
};

export type TenantPayload = {
  id: string;
};

declare global {
  namespace Express {
    export interface Request {
      user?: UserPayload;
      tenant?: TenantPayload;
    }
  }
}

export interface CustomerDetails {
  firstName: string;
  email: string;
}
