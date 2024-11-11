-- CreateTable
CREATE TABLE "Notification" (
    "Id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("Id")
);
