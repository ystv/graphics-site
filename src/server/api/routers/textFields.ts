import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { schemas } from "../schemas";
import { z } from "zod";
import { serverGlobals } from "@/server/socket";

export const textFieldsRouter = createTRPCRouter({
  read: publicProcedure
    .input(schemas.multiTexts.read.input)
    .query(async ({ ctx, input }) => {
      const res = await ctx.db.textField.findFirst({
        where: {
          event_id: input.event_id,
          path: input.path,
        },
      });

      return res;
    }),

  clear: protectedProcedure
    .input(
      z.object({
        multi_text_id: z.string().cuid(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.multiTextSelected.delete({
        where: {
          multi_text_id: input.multi_text_id,
        },
      });
      const res = await ctx.db.multiText.findFirstOrThrow({
        where: {
          id: input.multi_text_id,
        },
        select: {
          event: true,
          path: true,
        },
      });
      serverGlobals.io.emit(`update:event:${res.event.id}`);
      serverGlobals.io.emit(`update:multi_text:${res.event.id}:${res.path}`);
    }),

  update: protectedProcedure
    .input(schemas.textFields.update.input)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.textField.update({
        where: {
          event_id_path: { event_id: input.event_id, path: input.path },
        },
        data: {
          value: input.value,
        },
      });

      serverGlobals.io.emit(
        `update:text_field:${input.event_id}:${input.path}`,
      );
    }),
});
