import React from 'react';
import { Card, ICardTokens } from '@uifabric/react-cards';
import { Text } from 'office-ui-fabric-react';
import styles from './content-card.module.css';

interface Props {
  title?: string;
  description?: string;
  children?: JSX.Element | JSX.Element[];
}

export function ContentCard({ title, description, children }: Props) {
  const cardTokens: ICardTokens = {
    childrenMargin: 12,
    width: '100%',
    maxWidth: 800,
  };

  return (
    <Card tokens={cardTokens} className={styles.contentCard}>
      {title && (
        <Card.Item>
          <Text as="h3" variant="mediumPlus">
            {title}
          </Text>
        </Card.Item>
      )}
      {description && (
        <Card.Section>
          <Text variant="small">{description}</Text>
        </Card.Section>
      )}
      <Card.Section>{children}</Card.Section>
    </Card>
  );
}
