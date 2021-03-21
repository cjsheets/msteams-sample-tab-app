import React, { useEffect } from 'react';
import { Text, Stack } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { microsoftTeams, isInsideIframe } from 'teams-authenticator';
import { ContentCard } from '../components/content-card';
import { GetAuthToken } from '../components/authentication/get-auth-token';
import { StartTask } from '../components/tasks/start-task';

export default function Index() {
  const isEmbeddedInTeams = isInsideIframe();

  useEffect(() => {
    if (isEmbeddedInTeams) {
      microsoftTeams.initialize();
    }
  }, []);

  const TeamsSdkComponents = () => (
    <>
      <Text as="h1" variant="xLarge">
        Tasks
      </Text>
      <ContentCard title="startTask()" description="Allows an app to open the task module.">
        <StartTask />
      </ContentCard>
    </>
  );

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }} grow>
      <Text as="h1" variant="xxLarge">
        Sample Teams Tab App
      </Text>
      <ContentCard>
        <Card.Item> </Card.Item>
        <Text>Test features of the Microsoft Teams SDK.</Text>
        {!isEmbeddedInTeams && (
          <Text>
            <b>Note:</b> SDK features can only be tested when running inside the Teams client
          </Text>
        )}
      </ContentCard>
      <Text as="h1" variant="xLarge">
        Authentication
      </Text>
      <ContentCard
        title="getAuthToken()"
        description="Requests an Azure AD token to be issued on behalf of the app. The token is acquired from the cache if it is not expired. Otherwise a request is sent to Azure AD to obtain a new token."
      >
        <GetAuthToken />
      </ContentCard>
      {isEmbeddedInTeams && TeamsSdkComponents()}
    </Stack>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
