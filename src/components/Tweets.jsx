import { Card, Text, Group } from "@mantine/core";
import "./Tweets.css";
import { TweetContext } from "../components/TweetProvider";
import { useContext } from "react";
function Tweets() {
  const { tweets } = useContext(TweetContext);

  return (
    <>
      {tweets.map((t, i, arr) => {
        const tweetFromEnd = arr[arr.length - 1 - i];
        return (
          <Card
            key={tweetFromEnd.id}
            shadow="sm"
            padding="sm"
            radius="md"
            withBorder
            className="tweet-card"
          >
            <Group justify="space-between" mb="xs">
              <Text size="sm">{tweetFromEnd.username}</Text>
              <Text size="sm">{tweetFromEnd.date}</Text>
            </Group>
            <Text>{tweetFromEnd.content}</Text>
          </Card>
        );
      })}
    </>
  );
}
export default Tweets;
