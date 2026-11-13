-- CreateTable
CREATE TABLE "text_field" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "path" TEXT NOT NULL,
    "value" TEXT,
    "event_id" TEXT NOT NULL,

    CONSTRAINT "text_field_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "text_field_event_id_path_key" ON "text_field"("event_id", "path");

-- AddForeignKey
ALTER TABLE "text_field" ADD CONSTRAINT "text_field_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
