/*
  Warnings:

  - Added the required column `cookieConsent` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `cookieConsent` BOOLEAN NOT NULL;
