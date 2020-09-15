import React, { useState } from 'react';
import { Card } from '@uifabric/react-cards';
import { Dropdown, PrimaryButton, TextField } from '@fluentui/react';
import { TeamsJs } from 'msteams-auth-service';
import { TaskModuleDimension } from '@microsoft/teams-js';

type DropdownOption = { key: TaskModuleDimension; text: string };

export function StartTask() {
  const [title, setTitle] = useState<string>('Task Module');
  const [width, setWidth] = useState<DropdownOption>({ key: 'medium', text: 'Medium' });
  const [height, setHeight] = useState<DropdownOption>({ key: 'medium', text: 'Medium' });

  const sizeOptions: DropdownOption[] = [
    { key: TaskModuleDimension.Large, text: 'Large' },
    { key: TaskModuleDimension.Medium, text: 'Medium' },
    { key: TaskModuleDimension.Small, text: 'Small' },
  ];

  return (
    <Card.Section tokens={{ childrenGap: 20 }}>
      <Card.Item>
        <TextField onChange={(_, t) => setTitle(t)} placeholder="title" />
      </Card.Item>
      <Card.Item>
        <Dropdown
          label="Width"
          options={sizeOptions}
          onChange={(_, o) => setWidth(o)}
          selectedKey={width.key}
        />
      </Card.Item>
      <Card.Item>
        <Dropdown
          label="Height"
          options={sizeOptions}
          onChange={(_, o) => setHeight(o)}
          selectedKey={height.key}
        />
      </Card.Item>
      <Card.Item>
        <PrimaryButton
          text="Open Task Module"
          onClick={() => {
            TeamsJs.tasks.startTask({
              title,
              width: width.key,
              height: height.key,
              url: '/task-module',
            });
          }}
        />
      </Card.Item>
    </Card.Section>
  );
}
