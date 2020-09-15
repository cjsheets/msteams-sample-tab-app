import React, { useEffect } from 'react';
import { Text, Stack } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { TeamsJs } from 'msteams-auth-service';
import { ContentCard } from '../components/content-card';
import { GetAuthToken } from '../components/authentication/get-auth-token';
import { StartTask } from '../components/tasks/start-task';

export default function Index() {
  useEffect(() => {
    TeamsJs.initialize();
  }, []);

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }} grow>
      <Text as="h1" variant="xxLarge">
        Teams JS SDK
      </Text>
      <ContentCard>
        <Card.Item> </Card.Item>
        <Text>
          The Microsoft Teams JavaScript client SDK is part of the Microsoft Teams developer
          platform. It makes it easy to integrate your own services with Teams, whether you develop
          custom apps for your enterprise or SaaS applications for teams around the world. See The
          Microsoft Teams developer platform for full documentation on the platform and on the SDK.
        </Text>
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
      <Text as="h1" variant="xLarge">
        Tasks
      </Text>
      <ContentCard title="startTask()" description="Allows an app to open the task module.">
        <StartTask />
      </ContentCard>
    </Stack>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
