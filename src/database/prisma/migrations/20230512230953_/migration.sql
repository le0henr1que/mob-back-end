-- DropForeignKey
ALTER TABLE `passwordresetrequest` DROP FOREIGN KEY `PasswordResetRequest_userId_fkey`;

-- AlterTable
ALTER TABLE `passwordresetrequest` MODIFY `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `PasswordResetRequest` ADD CONSTRAINT `PasswordResetRequest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
