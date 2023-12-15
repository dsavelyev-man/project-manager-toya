/*
  Warnings:

  - The values [IMAGES,DOCUMENTS,OTHER] on the enum `BUCKET` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BUCKET_new" AS ENUM ('images', 'documents', 'other');
ALTER TABLE "Media" ALTER COLUMN "bucket" TYPE "BUCKET_new" USING ("bucket"::text::"BUCKET_new");
ALTER TYPE "BUCKET" RENAME TO "BUCKET_old";
ALTER TYPE "BUCKET_new" RENAME TO "BUCKET";
DROP TYPE "BUCKET_old";
COMMIT;
