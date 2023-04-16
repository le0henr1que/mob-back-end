/*
  Warnings:

  - You are about to alter the column `accepted_terms` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `accepted_terms` BOOLEAN NOT NULL;
