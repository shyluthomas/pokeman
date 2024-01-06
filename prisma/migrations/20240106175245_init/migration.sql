/*
  Warnings:

  - The primary key for the `pokeman` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `pokeman` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pokeman" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stats" TEXT NOT NULL,
    "types" TEXT NOT NULL
);
INSERT INTO "new_pokeman" ("id", "name", "stats", "types") SELECT "id", "name", "stats", "types" FROM "pokeman";
DROP TABLE "pokeman";
ALTER TABLE "new_pokeman" RENAME TO "pokeman";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
