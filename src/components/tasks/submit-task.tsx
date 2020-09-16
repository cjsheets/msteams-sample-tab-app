import React, { useState } from 'react';
import { PrimaryButton, TextField } from '@fluentui/react';
import { TeamsJs } from 'msteams-auth-service';
import { Card } from '@uifabric/react-cards';

export function SubmitTask() {
  const [result, setResult] = useState<string>();

  return (
    <>
      <TextField onChange={(_, r) => setResult(r)} placeholder="task module result" />
      <Card.Item>
        <PrimaryButton
          text="Close Task Module"
          onClick={() => {
            TeamsJs.tasks.submitTask(result);
          }}
        />
      </Card.Item>
    </>
  );
}
