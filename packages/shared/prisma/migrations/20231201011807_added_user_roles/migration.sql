-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "ROLES" NOT NULL DEFAULT 'USER';
