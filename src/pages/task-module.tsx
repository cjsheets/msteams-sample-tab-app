import React, { useEffect } from 'react';
import { Text, Stack } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { TeamsJs } from 'msteams-auth-service';
import { ContentCard } from '../components/content-card';

export default function Index() {
  useEffect(() => {
    TeamsJs.initialize();
  }, []);

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }} grow>
      <Text as="h1" variant="xxLarge">
        Task Module
      </Text>
      <ContentCard>
        <Card.Item> </Card.Item>
        <Text>
          This configuration page is required by Teams. (
          <a
            href="https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/create-tab-pages/configuration-page"
            target="_blank"
          >
            docs
          </a>
          )
        </Text>
      </ContentCard>
    </Stack>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
