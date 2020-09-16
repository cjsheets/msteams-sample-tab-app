import React, { useEffect, useState } from 'react';
import { Text, Stack } from 'office-ui-fabric-react';
import { TeamsJs } from 'msteams-auth-service';
import { SubmitTask } from '../components/tasks/submit-task';

export default function Index() {
  const [title, setTitle] = useState<string>();
  const [width, setWidth] = useState<string>();
  const [height, setHeight] = useState<string>();

  useEffect(() => {
    TeamsJs.initialize();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.get('title') && setTitle(urlParams.get('title'));
    urlParams.get('width') && setWidth(urlParams.get('width'));
    urlParams.get('height') && setHeight(urlParams.get('height'));
  }, []);

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }} grow>
      <Text as="h1" variant="xxLarge">
        Task Module
      </Text>
      {title && (
        <Text nowrap>
          <b>Title:</b> {title}
        </Text>
      )}
      {width && (
        <Text nowrap>
          <b>Width:</b> {width}
        </Text>
      )}
      {height && (
        <Text nowrap>
          <b>Height:</b> {height}
        </Text>
      )}
      <SubmitTask />
      <style jsx global>{`
        .ms-Fabric {
          background: #ffffff !important;
        }
      `}</style>
    </Stack>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
