/*
  Warnings:

  - A unique constraint covering the columns `[parent_id]` on the table `user_roles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user_roles" ADD COLUMN     "parent_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_parent_id_key" ON "user_roles"("parent_id");

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Parent"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
