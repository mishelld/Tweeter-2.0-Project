import { Button, Textarea, Card, Flex } from "@mantine/core";
import "./CreateTweet.css";
import { useState } from "react";

function CreateTweet({ onAddTweet }) {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("Bob");
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
            onAddTweet({
              id: crypto.randomUUID(),
              username: username,
              tweet: text,
              date: new Date().toLocaleDateString(),
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
