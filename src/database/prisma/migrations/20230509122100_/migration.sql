/*
  Warnings:

  - Added the required column `userId` to the `PasswordResetRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `passwordresetrequest` ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `PasswordResetRequest` ADD CONSTRAINT `PasswordResetRequest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
