-- CreateTable
CREATE TABLE "Student" (
    "rollNo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prn" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("rollNo")
);
