"use client";

import { useSocketTriggeredFunction } from "@/lib/socket/wrapper";
import { api } from "@/trpc/react";
import { useEvent } from "../event-provider";
import { TextField, type MultiTextOption } from "@prisma/client";
import React, { useEffect } from "react";
import { useGraphicsCollection } from "../graphics-collection-provider";
import { getMappedPath } from "@/lib/graphics";

type TextFieldProps = {
  path: string;
  event_id?: string;
} & (
  | {
      returnUndefined?: false;
      children: (textFieldData: TextField) => React.ReactNode;
    }
  | {
      returnUndefined: true;
      children: (textFieldData: TextField | undefined) => React.ReactNode;
    }
);

export default function TextFieldWrapper(props: TextFieldProps) {
  const event = useEvent();

  const collection = useGraphicsCollection();

  const event_id = props.event_id ?? event?.id;

  let mappedPath;

  if (!event_id) {
    throw new Error("No event_id or event context provided");
  }

  if (!collection) {
    mappedPath = props.path;
  } else {
    mappedPath = getMappedPath(
      collection.path_mapping,
      "text_fields",
      props.path,
    );
  }

  const textFieldData = api.textFields.read.useQuery({
    event_id: props.event_id ?? event!.id,
    path: mappedPath,
  });

  useEffect(() => {
    textFieldData
      .refetch()
      .catch((e) => console.error("Failed to update text field", e));
  }, [props.event_id, props.path]);

  useSocketTriggeredFunction(
    `update:text_field:${event_id}:${props.path}`,
    () => {
      textFieldData
        .refetch()
        .catch((e) => console.error("Failed to update text field", e));
    },
  );

  if (!textFieldData.data) {
    if (props.returnUndefined) return props.children(undefined);
    return <></>;
  }

  return props.children(textFieldData.data);
}
