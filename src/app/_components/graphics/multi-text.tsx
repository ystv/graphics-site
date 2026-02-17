"use client";

import { useSocketTriggeredFunction } from "@/lib/socket/wrapper";
import { api } from "@/trpc/react";
import { useEvent } from "../event-provider";
import { type MultiTextOption } from "@prisma/client";
import React, { useEffect } from "react";

type MultiTextProps = {
  path: string;
  event_id?: string;
} & (
  | {
      returnUndefined?: false;
      children: (multiTextData: MultiTextOption) => React.ReactNode;
    }
  | {
      returnUndefined: true;
      children: (multiTextData: MultiTextOption | undefined) => React.ReactNode;
    }
);

export default function MultiText(props: MultiTextProps) {
  const event = useEvent();

  const event_id = props.event_id ?? event?.id;

  if (!event_id) {
    throw new Error("No event_id or event context provided");
  }

  const multiTextData = api.multiTexts.read.useQuery({
    event_id: props.event_id ?? event!.id,
    path: props.path,
  });

  useEffect(() => {
    multiTextData
      .refetch()
      .catch((e) => console.error("Failed to update multitext", e));
  }, [props.event_id, props.path]);

  useSocketTriggeredFunction(
    `update:multi_text:${event_id}:${props.path}`,
    () => {
      multiTextData
        .refetch()
        .catch((e) => console.error("Failed to update multitext", e));
    },
  );

  if (!multiTextData.data) {
    if (props.returnUndefined) return props.children(undefined);
    return <></>;
  }

  return props.children(multiTextData.data);
}
