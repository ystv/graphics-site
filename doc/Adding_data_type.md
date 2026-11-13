To add a datatype like multitext or text_field, you currently need to update it in the following places before controls and wrappers will work:

- prisma/types.d.ts
- src/app/\_components/form-fields/graphics-collections.tsx
- src/lib/graphics/index.ts
- src/server/api/schemas/events.schema.ts

Once db and forms are created:

- src/server/api/routers/events.ts (events router, make sure it is created and added to the event)
