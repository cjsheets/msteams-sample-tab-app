import React, { useState } from 'react';
import { Card } from '@uifabric/react-cards';
import { PrimaryButton, TextField } from '@fluentui/react';
import { TeamsJs } from 'msteams-auth-service';

export function StartTask() {
  const [title, setTitle] = useState<string>('Task Module');
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(500);

  return (
    <Card.Section tokens={{ childrenGap: 20 }}>
      <Card.Item>
        <TextField onChange={(_, t) => setTitle(t)} placeholder="title" />
      </Card.Item>
      <Card.Item>
        <TextField onChange={(_, w) => setWidth(+w)} placeholder="width" />
      </Card.Item>
      <Card.Item>
        <TextField onChange={(_, h) => setHeight(+h)} placeholder="height" />
      </Card.Item>
      <Card.Item>
        <PrimaryButton
          text="Open Task Module"
          onClick={() => {
            TeamsJs.tasks.startTask({
              title,
              width,
              height,
              url: '/task-module',
            });
          }}
        />
      </Card.Item>
    </Card.Section>
  );
}
