import { Card, Text, Group } from "@mantine/core";
import "./Tweets.css";
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
            className="tweet-card"
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
