/*
  Warnings:

  - You are about to drop the column `image` on the `Nft` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Nft` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Nft" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "forSale" BOOLEAN NOT NULL,
    "ownerId" TEXT,
    "stock" INTEGER NOT NULL,
    "supply" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Nft_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Nft" ("createdAt", "description", "forSale", "id", "name", "ownerId", "price", "stock", "supply", "updatedAt") SELECT "createdAt", "description", "forSale", "id", "name", "ownerId", "price", "stock", "supply", "updatedAt" FROM "Nft";
DROP TABLE "Nft";
ALTER TABLE "new_Nft" RENAME TO "Nft";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
