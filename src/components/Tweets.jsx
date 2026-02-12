import { Card, Text, Group } from "@mantine/core";

function Tweets({ tweets }) {
  return (
    <>
      {tweets.map((t) => {
        return (
          <Card
            key={t.username}
            shadow="sm"
            padding="sm"
            radius="md"
            withBorder
          >
            <Group justify="space-between" mb="xs">
              <Text size="sm">{t.username}</Text>
              <Text size="sm">{t.date}</Text>
            </Group>
            <Text>{t.tweet}</Text>
          </Card>
        );
      })}
    </>
  );
}
export default Tweets;
