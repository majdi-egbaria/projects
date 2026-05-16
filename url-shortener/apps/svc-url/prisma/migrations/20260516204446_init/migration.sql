-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShortUrl` (
    `id` VARCHAR(191) NOT NULL,
    `shortCode` VARCHAR(191) NOT NULL,
    `originalUrl` TEXT NOT NULL,
    `title` VARCHAR(191) NULL,
    `clicks` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `expiresAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NULL,

    UNIQUE INDEX `ShortUrl_shortCode_key`(`shortCode`),
    INDEX `ShortUrl_shortCode_idx`(`shortCode`),
    INDEX `ShortUrl_userId_idx`(`userId`),
    INDEX `ShortUrl_createdAt_idx`(`createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClickMetric` (
    `id` VARCHAR(191) NOT NULL,
    `shortUrlId` VARCHAR(191) NOT NULL,
    `ipAddress` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `userAgent` TEXT NULL,
    `referer` TEXT NULL,
    `device` VARCHAR(191) NULL,
    `browser` VARCHAR(191) NULL,
    `os` VARCHAR(191) NULL,
    `clickedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `ClickMetric_shortUrlId_idx`(`shortUrlId`),
    INDEX `ClickMetric_clickedAt_idx`(`clickedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ShortUrl` ADD CONSTRAINT `ShortUrl_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClickMetric` ADD CONSTRAINT `ClickMetric_shortUrlId_fkey` FOREIGN KEY (`shortUrlId`) REFERENCES `ShortUrl`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
