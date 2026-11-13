"use client";

import { api } from "@/trpc/react";
import {
  Button,
  Card,
  Center,
  Group,
  Loader,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import VisibleStateWrapper from "./graphics/visible-state-wrapper";
import TextFieldWrapper from "./graphics/text-field-wrapper";
import { useState } from "react";

export function TextFieldControl(props: { event_id: string; path: string }) {
  const saveValue = api.textFields.update.useMutation();

  const [newValue, setNewValue] = useState<string>("");

  const textFieldQuery = api.textFields.read.useQuery({
    event_id: props.event_id,
    path: props.path,
  });

  return (
    <Card withBorder>
      {textFieldQuery.data ? (
        <TextFieldWrapper event_id={props.event_id} path={props.path}>
          {(textFieldData) => (
            <Stack>
              <Group>
                <Text>{textFieldQuery.data?.name}</Text>
                <Text c="dimmed">{textFieldQuery.data?.path}</Text>
              </Group>
              <Center>
                <Title>{textFieldData.value}</Title>
              </Center>
              <Group>
                <TextInput
                  onChange={(e) => setNewValue(e.currentTarget.value)}
                  value={newValue}
                />
                <Button
                  ml={"auto"}
                  onClick={() => {
                    void saveValue.mutate({
                      event_id: props.event_id,
                      path: props.path,
                      value: newValue,
                    });
                  }}
                >
                  Update
                </Button>
              </Group>
            </Stack>
          )}
        </TextFieldWrapper>
      ) : (
        <Center>
          <Loader />
        </Center>
      )}
    </Card>
  );
}
