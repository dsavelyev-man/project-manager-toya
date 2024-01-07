-- CreateTable
CREATE TABLE "UserLinks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "projectId" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserLinks" ADD CONSTRAINT "UserLinks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLinks" ADD CONSTRAINT "UserLinks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
