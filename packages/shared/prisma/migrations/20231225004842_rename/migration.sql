/*
  Warnings:

  - You are about to drop the `UserLinks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserLinks" DROP CONSTRAINT "UserLinks_projectId_fkey";

-- DropForeignKey
ALTER TABLE "UserLinks" DROP CONSTRAINT "UserLinks_userId_fkey";

-- DropTable
DROP TABLE "UserLinks";

-- CreateTable
CREATE TABLE "UserLink" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "projectId" INTEGER,
    "userId" INTEGER NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserLink" ADD CONSTRAINT "UserLink_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLink" ADD CONSTRAINT "UserLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
