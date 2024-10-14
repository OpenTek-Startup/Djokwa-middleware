-- CreateTable
CREATE TABLE "BlockNote" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "deadline" TIMESTAMP(3),
    "note" TEXT,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlockNote_pkey" PRIMARY KEY ("id")
);
