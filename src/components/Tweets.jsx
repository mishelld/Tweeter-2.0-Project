import { Card, Text, Group } from "@mantine/core";
import "./Tweets.css";
import { TweetContext } from "../components/TweetProvider";
import { useContext } from "react";
function Tweets() {
  const { tweets } = useContext(TweetContext);

  return (
    <>
      {tweets.map((t) => {
        return (
          <Card
            key={t.id}
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
            <Text>{t.content}</Text>
          </Card>
        );
      })}
    </>
  );
}
export default Tweets;
