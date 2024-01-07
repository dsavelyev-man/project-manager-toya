-- CreateTable
CREATE TABLE "ProjectBoard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "backgroundUrl" TEXT,
    "previewUrl" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectBoard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectBoard_name_idx" ON "ProjectBoard"("name");
