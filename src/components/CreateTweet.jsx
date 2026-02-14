import { Button, Textarea, Card, Flex } from "@mantine/core";
import "./CreateTweet.css";
import { useState, useContext } from "react";
import { TweetContext } from "../components/TweetProvider";

function CreateTweet({ username }) {
  const { handleAddTweet } = useContext(TweetContext);

  const [text, setText] = useState("");
  const maxChars = 140;
  const isDisabled = text.length > maxChars;
  return (
    <Card
      shadow="sm"
      padding="sm"
      radius="md"
      withBorder
      className="create-tweet"
    >
      <Textarea
        placeholder="What you have in mind..."
        autosize
        minRows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        error={text.length > maxChars ? "more than 140 chars" : null}
        className="textarea"
      />
      <Flex justify="flex-end">
        <Button
          variant="filled"
          disabled={isDisabled}
          onClick={() =>
            handleAddTweet({
              date: new Date().toISOString(),
              username: username,
              content: text,
            })
          }
        >
          Tweet
        </Button>
      </Flex>
    </Card>
  );
}
export default CreateTweet;
