/*
  Warnings:

  - You are about to drop the column `commentId` on the `comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_commentId_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `commentId`,
    ADD COLUMN `ratingId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_ratingId_fkey` FOREIGN KEY (`ratingId`) REFERENCES `Rating`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
