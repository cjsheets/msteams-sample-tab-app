import React, { useContext, useState } from 'react';
import { Card } from '@uifabric/react-cards';
import { PrimaryButton } from '@fluentui/react';
import { Text } from 'office-ui-fabric-react';
import { AuthContext } from '../../pages/_app';

export function GetAuthToken() {
  const [token, setToken] = useState<string>();
  const authenticator = useContext(AuthContext);

  return (
    <Card.Section>
      <Card.Item>
        <PrimaryButton
          text="Get Token"
          onClick={() => {
            authenticator.getToken([]).then((token) => setToken(token));
          }}
        />
        {token && (
          <>
            <br />
            <Text style={{ wordBreak: 'break-word' }}>
              <b>Token:</b> {token}
            </Text>
          </>
        )}
      </Card.Item>
    </Card.Section>
  );
}
