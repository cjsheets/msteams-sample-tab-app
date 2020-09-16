import React, { useState } from 'react';
import { Card } from '@uifabric/react-cards';
import { PrimaryButton, TextField } from '@fluentui/react';
import { TeamsJs } from 'msteams-auth-service';
import { Text } from 'office-ui-fabric-react';

export function StartTask() {
  const [title, setTitle] = useState<string>('Task Module');
  const [width, setWidth] = useState<number>(800);
  const [height, setHeight] = useState<number>(500);
  const [result, setResult] = useState<string>();

  const querystring = `?title=${title}&width=${width}&height=${height}`;

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
            TeamsJs.tasks.startTask(
              {
                title,
                width,
                height,
                url: window.location.origin + '/task-module' + querystring,
              },
              (err, res) => setResult(res)
            );
          }}
        />
      </Card.Item>
      {result && (
        <Card.Item>
          <Text nowrap>
            <b>Result:</b> {result}
          </Text>
        </Card.Item>
      )}
    </Card.Section>
  );
}
