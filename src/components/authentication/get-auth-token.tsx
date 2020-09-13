import React, { useState } from 'react';
import { Card } from '@uifabric/react-cards';
import { PrimaryButton } from '@fluentui/react';
import { TeamsJs } from 'msteams-auth-service';
import { Text } from 'office-ui-fabric-react';

export function GetAuthToken() {
  const [token, setToken] = useState<string>();

  return (
    <Card.Section>
      <PrimaryButton
        text="Get Token"
        onClick={() => {
          TeamsJs.authentication.getAuthToken({
            resources: ['proxy.sheets.ch'],
            successCallback: (token) => {
              console.log('cb', token);
              setToken(token);
            },
          });
        }}
      />
      {token && (
        <>
          <br />
          <Text overflow nowrap>
            <b>Token:</b> {token}
          </Text>
        </>
      )}
    </Card.Section>
  );
}
